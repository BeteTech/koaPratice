let funPromise = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            reject('this is a promise error');
        }, time);
    });
};

let funAsync = async function () {
    // let numArr = [1003, 1002, 1001];
    let num = 3000;
    console.log('start :' + new Date());
    try {
        // for (const iterator of numArr) {
        //     let result = await funPromise(iterator);
        //     console.log('this log will no execute');
        // }
        let result = await funPromise(num);
        console.log('this log will no execute');
    } catch (error) {
        console.log(error);
    }
    console.log('end :' + new Date());
};

funAsync();