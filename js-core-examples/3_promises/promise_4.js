const myPromise = new Promise(function (resolve, _reject) {
    console.log(1)

    resolve();
})

myPromise
    .then(() => {
    console.log(2)

    throw new Error('Handmade error in then.')
})
    .then(()=>console.log(3))
    .then(()=>console.log(4))
    .catch(() => console.log('Caught error in catch.'))