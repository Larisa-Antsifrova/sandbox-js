// Promise.race()

const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 200);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 100);
});

Promise.race([pro1, pro2])
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

