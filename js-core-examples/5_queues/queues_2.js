console.log(1)

setTimeout(() => console.log(2), 0)

function b(cb) {
    console.log(3)
    cb()
    console.log(4)
}

b(() => console.log(5))

console.log(6)
