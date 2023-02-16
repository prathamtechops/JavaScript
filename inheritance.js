function Emp(name) {
    this.name = name;
}

Emp.prototype.getName = function () {
    console.log(this.name);
};

let emp = new Emp("Nidhi");
emp.getName();

function Mang(name, dep) {
    this.name = name;
    this.dep = dep;
}
Mang.prototype.getDep = function () {
    console.log(this.dep);
};

let mang = new Mang("Pratham", "Eng");

Mang.prototype.__proto__ = Emp.prototype;
mang.getName();
mang.getDep();
