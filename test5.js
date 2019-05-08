let funPromise = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(time + ':' + new Date());
        }, time);
    });
};

let funAsync = async function () {
    let numArr = [1003, 1002, 1001];
    try {
        for (const iterator of numArr) {
            let result = await funPromise(iterator);
            console.log(result);
        }
    } catch (error) {
        console.log(error);
    }
};

funAsync();