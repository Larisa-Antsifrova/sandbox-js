function doSomething(callback) {
    console.log(1)

    callback()
}

function illustrateCallback() {
    console.log(2)
}

setTimeout(() => doSomething(illustrateCallback), 0)

const a = new Promise((resolve, _reject) => {
    console.log(3)

    resolve()
})

a.then(illustrateCallback)
