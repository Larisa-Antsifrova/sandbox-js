console.log(1)

setTimeout(() => console.log(2), 0)

a = new Promise(function(resolve, reject) {
    resolve();
})

a.then(() => console.log(3))

function b(cb) {
    console.log(4)
    cb()
    console.log(5)
}

a.then(() => console.log(6))

b(() => console.log(7))

a.then(() => console.log(8))

console.log(9)

a.then(() => console.log(10))
