const myPromise = new Promise(function (resolve, _reject) {
    console.log(1)

    resolve();
})

myPromise.then(() => {
    console.log(2)

    throw new Error('Error in first then.')
})
    .catch(() => console.log(3))
    .then(() => {
        console.log(4)
        throw new Error('Error in second then.')
    })
    .catch(() => console.log(5))
