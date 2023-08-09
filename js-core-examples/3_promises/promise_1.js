const myPromise = new Promise(function (resolve, _reject) {
    console.log(1)

    resolve(2);
})

myPromise.then((value) => console.log(value))