const {
  default: axios
} = require('axios');
const {
  appid,
  mch_id,
  notify_url,
  orderUrl,
  orderquery
} = require('../config/wx')
const {
  getTrade_no,
  createSign,
  getRandomStr,
  orderHandle
} = require('../utils')
const QRCode = require('qrcode');



// 微信下单
module.exports.order = async (ctx) => {
  // 前端调用下单接口时传递的参数
  const {
    body,
    total_fee,
    spbill_create_ip,
    trade_type,
    nonce_str,
    out_trade_no
  } = ctx.request.body;
  // 生成sign需要的参数
  const params = {
    appid,
    mch_id, //商户号
    nonce_str, //32位以内随机字符串
    // sign, //签名
    body, //商品描述
    out_trade_no, //商户订单号
    total_fee, //金额
    spbill_create_ip, //终端IP
    notify_url, //微信服务器回调地址
    trade_type //支付类型
  }
  // 随机字符串
  nonce_str = getRandomStr();
  // 生成前面 需要你发送的参数生成
  const sign = createSign(params);
  // console.log(sign);
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

  const data = await orderHandle(orderUrl, sendData);


  // 下单成功
  const {
    return_code,
    return_msg,
    result_code,
    code_url
  } = data;
  // 下单成功
  if (return_code == 'SUCCESS' && return_msg == 'OK' && result_code == 'SUCCESS') {
    data.payUrl = await QRCode.toDataURL(code_url)
  }
  ctx.body = {
    status: 200,
    data
  }
}
// 微信下单通知
module.exports.notify = async (ctx) => {
  // 打印微信服务器回调你的接口时的请求报文
  console.log(ctx.request.body)
}

// 微信订单查询
module.exports.queryOrder = async (ctx) => {
  const {
    nonce_str,
    out_trade_no
  } = ctx.request.body;
  let params = {
    appid,
    mch_id,
    nonce_str,
    out_trade_no
  };
  // 生成签名
  let sign = createSign(params);
  let sendData = `
  <xml>
       <appid>${appid}</appid>
       <mch_id>${mch_id}</mch_id>
       <nonce_str>${nonce_str}</nonce_str>
       <out_trade_no>${out_trade_no}</out_trade_no>
       <sign>${sign}</sign>
  </xml>
`
  const data = await orderHandle(orderquery, sendData);

  ctx.body = {
    status: 200,
    data
  }
}