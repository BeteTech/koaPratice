let funPromise = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(time + ':' + new Date());
        }, time);
    });
};

let funAsync = async function () {
    let numArr = [1003, 1002, 1001];
    numArr.forEach(async function (value, index) {
        //execute three function in one time
        let result = await funPromise(value);
        console.log(result);
    });
};

funAsync();