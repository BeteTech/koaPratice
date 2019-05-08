let funPromise = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve();
        }, time);
    });
};
//await is only valid in async function
let funAsync=async function(){
    let numArr=[1003,1002,1001];
    numArr.forEach(function(value,index){
        await funPromise(value);
    });
};

funAsync();