main()

function main() {
    console.log(1)

    setTimeout(() => console.log(2), 0)

    promise1().then(() => {
        setTimeout(() =>
            console.log(3), 3000)
    })

    simple(() => console.log(4))

    promise2().then(() => console.log(5))

    console.log(6)
}

function simple(cb) {
    console.log(7)
    cb()
    console.log(8)
}

function promise1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
                console.log(9)
                resolve()
            }
            , 5000)
    })
}

function promise2() {
    return new Promise(function (resolve, reject) {
        console.log(10)
        resolve();
    })
}
