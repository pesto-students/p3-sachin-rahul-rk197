function multiplication(a, b) {
    return new myPromise((resolve) => {
        resolve(a * b)
    })
}

function myPromise(ext) {
    let onResolve;
    let called = false;
    let fulfilled = false;
    let value
    this.then = function (fn) {
        onResolve = fn;
        if (fulfilled) {
            onResolve(value)
        }
        called = true;
        return this;
    }
    function resolve(val) {
        fulfilled = true;
        value = val;
        if(called){
            onResolve(val);
        }
    }
    ext(resolve)
}

multiplication(5,6).then((res)=>{
    console.log(res);
})