// Promise.any()

const SlowlyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 500, "Done slowly");
});

const QuicklyDone = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, "Done quickly");
});

const Rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected");
});

Promise.any([SlowlyDone, QuicklyDone, Rejection])
    .then((value) => {
        console.log(value);
    })
    .catch((err) => {
        console.log(err);
    });