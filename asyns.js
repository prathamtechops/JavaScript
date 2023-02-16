function validUser({ userId, password }) {
    return new Promise(function (resolve, reject) {
        if (userId && password) {
            resolve("Valid");
        } else {
            reject("Invalid user");
        }
    });
}

const app = async () => {
    let user = {
        userId: "s",
        password: "s",
    };
    try {
        let result = await validUser(user);
        console.log(result);
    } catch (err) {
        console.log(err.message);
    }
};

app();
