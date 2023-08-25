console.log("Program Started");

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ data: "Hello, friend!", error: null });
    }, 5000);
    // console.log(myPromise);
    console.log("Program is process...");
})
    .then((resolve) => {
        console.log(resolve);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("First promise chain complete");
            }, 2000);
        });
    })
    .then((resolve) => {
        console.log(resolve);
    });
