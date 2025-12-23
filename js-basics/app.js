// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// for (let i = 0; i < bills.length; i++) {
//   tips.push(calcTip(bills[i]));
//   totals.push(tips[i] + bills[i]);
//   //console.log(`${bills[i]} + ${tips[i]} = ${totals[i]}`);
// }

// let x = 6;

// for (i = 0; i <= 10; i++) {
//   console.log(i);
// }

// function Player(name, age, style, team, matches, runs, wickets){
//     this.name = name;
//     this.age = age;
//     this.style = style;
//     this.team = team;
//     this.matches = matches;
//     this.runs = runs;
//     this.wickets = wickets;
//     this.average = function(){
//         let playerAverage = this.runs / this.matches;
//         return playerAverage
//     };
// }

// let player1 = new Player("Sachin Tendulkar", 40, "Batsman", "Mumbai", 200, 7907, 45);

// console.log(player1.average());

//Spreading arrays
let arr = ["Aman", "Kanak", "Dehradun"];
let [v1, v2, v3] = arr;
console.log(v1);

//spreading after slpit
let [fname, lname] = "Aman Rathi".split(" ");
console.log(fname, lname);

const calc = function ([one, two, three, four, five, six, seven]) {
  console.log(one);
};

calc(["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]);

//Spreading objects
