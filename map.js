const m = new Map();
m.set("one", 1);
m.set("two", 2);
m.set("three", 3);
m.set("four", 4);
for (let v of m.values()) {
    console.log(v);
}
for (let v of m.keys()) {
    console.log(v);
}
