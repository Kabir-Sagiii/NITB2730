var stdObj = {
  name: "Kabir",
  city: "Delhi",
  phn: 9999999999,
};

//reading or accessing
console.log(stdObj.city);
console.log(stdObj.phn);

//insertion or write
stdObj.email = "Kabir@gmail.com";
stdObj.state = "Delhi";
console.log(stdObj);

//updation
stdObj.city = "Mumbai";
console.log(stdObj);

stdObj.marks = 90; //insertion

stdObj.name = "NareshIT"; //updation

delete stdObj.phn;
console.log(stdObj);
