const f1 = async () => 1
const f2 = async () => 2

async function f3() {
    console.log(3)

    const val1 = await f1()
    const val2 = await f2()

    console.log(val1)
    console.log(val2)
}

f3()