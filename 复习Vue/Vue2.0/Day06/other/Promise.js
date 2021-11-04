
let PENDING = 'PENDING';  // 默认等待
let FULLFILLED = 'FULLFILLED';  // pending ->成功
let REJECTED = 'REJECTED'; // pending ->失败

class Promise {

    constructor(executor) {
        this.value = undefined; // 成功值
        this.reason = undefined; // 失败值
        this.status = PENDING;

        this.onResolveCallBacks = [];  // 成功回调
        this.onRejectCallBacks = [];

        // 从pending 变成成功
        const resolve = (value) => {
            // 变成成功
            if (this.status == PENDING) {
                this.status = FULLFILLED;
                this.value = value;

                this.onResolveCallBacks.forEach(fn => fn());
            }
        }

        const reject = (reason) => {
            if (this.status == PENDING) {
                this.status = REJECTED;
                this.reason = reason;

                this.onRejectCallBacks.forEach(fn => fn());
            }
        }

        executor(resolve, reject);

    }

    // 原型上增加方法

    then(onResolve, onReject) {
        if (this.status == FULLFILLED) {
            onResolve(this.value);
        }

        if (this.status == REJECTED) {
            onReject(this.reason);
        }

        if (this.status == PENDING) {
            this.onResolveCallBacks.push(() => {
                onResolve(this.value);
            });

            this.onRejectCallBacks.push(() => {
                onReject(this.reason);
            });
        }
    }

}

module.exports = Promise;