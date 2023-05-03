async function f1() {}
const f2 = async () => {
    console.log(1)

    return 2
}

f1().then(() => console.log(3))
f2().then(value => console.log(value))