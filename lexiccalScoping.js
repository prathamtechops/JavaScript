const myFunction = () => {
    let myValue = 2;
    console.log(myValue);

    const childFunction = () => {
        console.log((myValue += 1));
    };

    return childFunction;
};
const result = myFunction();
console.log(result);
console.log("jk");
result();
result();
result();
