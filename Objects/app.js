//
// const obj1 = {
//   name: "Aman",
//   education: {
//     school: "Army School",
//     college: "Garhwal University",
//   },
//   age: function () {
//     return this.name + " " + "35";
//   },
// };

// const obj2 = Object.assign({}, obj1);
// obj1.education.school = "New school";
// obj1.name = "Rohit";

// console.log(obj1.name);

// Array -> Map, Filter, reduce

// const cities = [
//   "New York",
//   "London",
//   "Tokyo",
//   "Paris",
//   "Sydney",
//   "Mumbai",
//   "Cairo",
//   "Rio de Janeiro",
//   "Toronto",
//   "Berlin",
// ];

//map
// const cities2 = cities.map(function (value, index, array) {
//   return index + " - " + value;
// });

//filter
// const cities3 = cities.filter((value) => value.length > 5);

// console.log(cities3);

//reduce
// const cities2 = cities.reduce(function (accumulator, value, index, array) {
//   return accumulator + ", " + value;
// });
