function fn(f) {
  f("NIT", "HYD");
  var a = 100; // 200 lines
  var b = 200;
  f("Kabir", "Delhi");
  var c = a + b;
  console.log(c);
  f("NareshIT", "chennai");
}

fn(function (name, city) {
  //   console.log("Callback Function is called");
  console.log(name, city);
});
