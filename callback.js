// function mainFunction(num, callback) {
//     console.log("The number is " + num);
//     callback();
// }

// function fun1() {
//     console.log("Fun1 called");
// }
// function fun2() {
//     console.log("Fun2 called");
// }

// mainFunction(2, fun1);
// mainFunction(3, fun2);

function onLoad(url) {
    let script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
}

onLoad(
    "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
);
