class A {
  name;
  constructor(x) {
    this.name = x;
  }

  printName() {
    //100
    console.log(this.name);
  }
}

class B extends A {
  city;

  constructor(y) {
    super("Naresh");
    this.city = y;
  }
  printCity() {
    console.log(this.city);
  }
}

var b1 = new B("Hyderabad");
b1.printCity();
b1.printName();
