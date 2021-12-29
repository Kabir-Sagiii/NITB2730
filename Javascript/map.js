var arr = ["10", {}, 30, 40];

var newData = arr.map(function (element, index) {
  if (element > 20) {
    return element + 100;
  } else {
    return element;
  }
});

console.log(newData);
