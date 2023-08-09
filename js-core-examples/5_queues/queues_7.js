main()

function main() {
    console.log(1)

    setTimeout(() => console.log(2), 0)
    promise1().then(() => console.log(3))
    simple(() => console.log(4))
    promise2().then(() => {
        delay(3000)
        console.log(5)
    })

    console.log(6)
}

function simple(cb) {
    console.log(7)
    cb()
    console.log(8)
}

function promise1() {
    return new Promise(function (resolve, reject) {
        console.log(9)
        delay(2000)
        resolve();
    })
}

function promise2() {
    return new Promise(function (resolve, reject) {
        console.log(10)
        resolve();
    })
}

function delay(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}