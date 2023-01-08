const personPrototype = {
    great() {
        console.log("hello");
    },
};

const nidhi = Object.create(personPrototype);
nidhi.great();
let name = alert("Enter your name");
