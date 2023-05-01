const myPromise = new Promise(function (resolve, reject) {
    console.log(1)

    reject(2);
})

myPromise
    .then((value) => console.log('Value: ', value))
    .catch((error) => console.log('Error: ', error)).then((value)=>console.log(value))
