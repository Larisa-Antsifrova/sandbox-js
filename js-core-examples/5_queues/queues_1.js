console.log(1)

function b(cb) {
    console.log(2)
    cb()
    console.log(3)
}

b(() => console.log(4))

console.log(5)
