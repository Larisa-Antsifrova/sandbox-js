console.log(1)

setTimeout(() => console.log(2), 0)

const a = new Promise(function(resolve, reject) {
    resolve();
})

a.then(() => console.log(3))
.then(() => console.log(4))
.then(() => console.log(5))

function b(cb) {
    console.log(6)
    cb()
    console.log(7)
}

b(() => console.log(8))

console.log(9)
