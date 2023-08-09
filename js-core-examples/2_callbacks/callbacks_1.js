function doSomething(callback) {
    console.log(1)

    callback()
}

function illustrateCallback() {
    console.log(2)
}

doSomething(illustrateCallback)

doSomething(() => console.log(3))