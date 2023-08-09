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

c = new Promise(function(resolve, reject) {
    resolve();
})

c.then(() => console.log(7))

b(() => console.log(8))

a.then(() => console.log(9))

console.log(10)

c.then(() => console.log(11))

a.then(() => console.log(12))
