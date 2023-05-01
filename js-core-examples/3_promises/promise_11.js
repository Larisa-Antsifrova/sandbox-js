// Promise.any()

const rejection = new Promise((resolve, reject) => {
    setTimeout(reject, 100, "Rejected");
});

Promise.any([rejection])
    .catch((err) => {
        console.log(err);
    });