const personPrototype = {
    great() {
        console.log("hello");
    },
};

const nidhi = Object.create(personPrototype);
nidhi.great();
