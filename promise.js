// let promise = new Promise(function (resolve, reject) {
//     console.log("I am in the promise");
// });
// console.log("hello");
// setTimeout(() => {
//     console.log("Hello 2");
// }, 2000);

// console.log("Hello 3");

// let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("He fell down.."));
//     }, 2000);
// });

// // let promiseError = new Promise((resolve, reject) => {
// //     reject(new Error("Disater"));
// // });

// let cook = () => {
//     promise
//         .then((value) => {
//             console.log(value);
//         })
//         .catch((error) => {
//             console.log(error.message);
//         });
// };
// cook();

// const promise = new Promise((resolve, reject) => {
//     reject(new Error("Eroor"));
// });

// promise.catch(function (error) {
//     console.log(error);
// });

let getUser = new Promise((resolve, reject) => {
    const user = {
        name: "John",
        email: "john@example.com",
        age: 36,
    };
    resolve(user);
});

getUser
    .then((user) => {
        console.log(user.name);
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve("Delhi"), 2000);
        });
    })
    .then(function (address) {
        console.log(address);
    });
