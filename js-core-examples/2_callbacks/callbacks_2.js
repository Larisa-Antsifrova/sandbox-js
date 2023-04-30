function doSomething(callback) {
    console.log(1)

    callback()
}

function illustrateCallback() {
    console.log(2)
}

setTimeout(() => doSomething(illustrateCallback), 0)

