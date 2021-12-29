class Employee {
  name = "NIT";
  city = "HYD";

  printDetail() {
    console.log(this.name, this.city);
  }
}

var e1 = new Employee();
var e2 = new Employee();
e2.name = "Kabir";

// console.log(e1.name);
// console.log(e2.name);

e1.printDetail();
e2.printDetail();
