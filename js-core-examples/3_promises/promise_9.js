// Promise.all()

const pro1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("one"), 1000);
});

const pro2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("two"), 2000);
});

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 3000);
});

Promise.all([pro1, pro2, pro3])
    .then((values) => {
        console.log(values);
    })
    .catch((error) => {
        console.log(error);
    });