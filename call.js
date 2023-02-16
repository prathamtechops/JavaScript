var obj = {
    num: 2,
    letter: 4,
};

let add = function (a) {
    return this.num + a;
};

let add2 = function (a, c, b) {
    return this.num + a + c + b;
};

// console.log(add.call(obj, [1, 2, 3]));
console.log(add2.apply(obj, [1, 2, 3]));
