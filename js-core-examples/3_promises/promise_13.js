// Promise.race()

const pro3 = new Promise((resolve, reject) => {
    setTimeout(() => reject("rejected"), 300);
});

const pro4 = new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 400);
});

Promise.race([pro3, pro4])
    .then((response) => {
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });