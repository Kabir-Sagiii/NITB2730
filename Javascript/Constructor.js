class Student {
  brand;
  model;

  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  printDetails() {
    console.log(this.brand, this.model);
  }
}

var s1 = new Student("oneplus", "oneplus9 pro");
s1.printDetails();

var s2 = new Student("Apple", "Iphone13 max");
s2.printDetails();
