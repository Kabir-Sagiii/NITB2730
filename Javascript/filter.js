var Mobile = [
  {
    brand: "Apple",
    model: "Iphone 13",
  },
  {
    brand: "SamSung",
    model: "Samsung Galaxy",
  },
  {
    brand: "apple",
    model: "Iphone 11",
  },
];

var FilteredData = Mobile.filter(function (element) {
  return element.brand === "Apple";
});
console.log(FilteredData);
