let funPromise = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(time + ':' + new Date());
        }, time);
    });
};

let funAsync = async function () {
    let numArr = [1003, 1002, 1001];
    //forEach写法会引起问题-await is only valid in async function
    numArr.forEach(function (value, index) {
        let result = await funPromise(value);
        console.log(result);
    });
};

funAsync();