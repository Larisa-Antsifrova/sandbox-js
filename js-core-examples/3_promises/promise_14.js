// Promise.allSettled()

const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 200);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 100);
});

Promise.allSettled([pro1, pro2])
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });

