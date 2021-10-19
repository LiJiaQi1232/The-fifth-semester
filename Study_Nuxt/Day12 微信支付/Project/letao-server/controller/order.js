const {default:axios}=require('axios');
const {
  appid,
  mch_id,
  notify_url,
  orderUrl
} = require('../config/wx')
const {
  getTrade_no,
  createSign,
  getRandomStr,
  createOrder
} = require('../utils')
const QRCode=require('qrcode')




module.exports.order = async (ctx) => {
  // 前端调用下单接口时传递的参数
  const {
    body,
    total_fee,
    spbill_create_ip,
    trade_type
  } = ctx.request.body;
  // 下单需要的参数
  const params = {
    appid,
    mch_id, //商户号
    nonce_str: getRandomStr(), //32位以内随机字符串
    // sign, //签名
    body, //商品描述
    out_trade_no: getTrade_no(), //商户订单号
    total_fee, //金额
    spbill_create_ip, //终端IP
    notify_url, //微信服务器回调地址
    trade_type //支付类型
  }
  // 生成前面 需要你发送的参数生成
  const sign = createSign(params);

  let sendData = `
    <xml>
    <appid>${appid}</appid>
    <body>${body}</body>
    <mch_id>${mch_id}</mch_id>
    <nonce_str>${params.nonce_str}</nonce_str>
    <notify_url>${notify_url}</notify_url>
    <out_trade_no>${params.out_trade_no}</out_trade_no>
    <spbill_create_ip>${spbill_create_ip}</spbill_create_ip>
    <total_fee>${total_fee}</total_fee>
    <trade_type>${trade_type}</trade_type>
    <sign>${sign}</sign>
</xml>
    `

  const data = await createOrder(orderUrl, sendData);


  // 下单成功
  const {return_code,return_msg,result_code,code_url}=data;

  if(return_code=='SUCCESS'&& return_msg=='OK'&&result_code=='SUCCESS'){
    data.payUrl=await QRCode.toDataURL(code_url)
  }
  ctx.body = {
    status: 200,
    data
  }
}