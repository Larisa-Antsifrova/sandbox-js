const myPromise = new Promise(function (resolve, _reject) {
    console.log(1)

    resolve();
})

myPromise.then(() => {
    console.log(2)

    throw new Error('Error in first then.')
}).then(() => console.log(3))
    .catch(() => console.log(4))
    .then(() => {
        console.log(5)

        throw new Error('Error in second then.')
    })
    .catch(() => console.log(6))
    .finally(() => console.log(7))


