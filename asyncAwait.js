console.log("Program started");

const getCandy = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ candy: "sour keys", quality: 10 });
        }, 2000);
    });
};

const sellCandy = (candy) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(candy.quality * 25);
        }, 3000);
    });
};

const useCandy = async () => {
    const candy = await getCandy();
    const result = await sellCandy(candy);
    console.log(result);
};
useCandy();
console.log("Program ended");
