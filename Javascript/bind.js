var student = {
  name: "NIT",
};

var employee = {
  name: "Naresh",
};

function fnDisplayName(x) {
  console.log(this.name, x);
}

// var fn = fnDisplayName.bind(employee, "Kabir");
// fn();

// fnDisplayName.bind(employee)("NItttttttt");

fnDisplayName.bind(employee, "NItttttttt")();
