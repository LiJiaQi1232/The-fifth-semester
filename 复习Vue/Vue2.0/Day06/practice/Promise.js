let PENDING='PENDING';  //默认等待
let FULLFILLED='FULLFILLED'; //pending->成功
let REJECTED='REJECTED' // pending->失败

class Promise{
  constructor(executor){
    this.value=undefined;
    this.reason=undefined;
    this.status=PENDING;

    
    // 
    const resolve=(value)=>{
      // 
    }
  }
}