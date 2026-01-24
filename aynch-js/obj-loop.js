// Here’s a progressive practice set — start simple, then it sneaks in real-world patterns.
// Try to solve each using for / for…of / map / filter / reduce (sometimes multiple ways).

// problem 1 --------------
//Loop over all keys and log key: value
//Create an array of all values
//Check if user has a key called "email"
//Convert this object into: ["id=101", "name=Aman", ...]

// const user = {
//   id: 101,
//   name: "Aman",
//   age: 26,
//   isActive: true,
//   role: "admin",
// };

//solution 1----------
// const newArr = [];
// for (const [key, value] of Object.entries(user)) {
//   console.log(`${key}: ${value}`);
//   newArr.push(`${key}=${value}`);
// }

// const userValues = Object.values(user);
// console.log(userValues);
// console.log(newArr);

// problem 2 --------------
// Get names of all active users
// Get users older than 25
// Get an array of only names
// Count how many users are active
// Create an object like:
// {
//   active: [...],
//   inactive: [...]
// }

//solution 2----------
const users = [
  { id: 1, name: "Aman", age: 26, active: true },
  { id: 2, name: "Riya", age: 22, active: false },
  { id: 3, name: "Kabir", age: 30, active: true },
  { id: 4, name: "Neha", age: 28, active: false },
];

const activeUsersName = users.filter((value, index, arr) => {
  return value.active;
});

//console.log(activeUsersName);

const user25 = users.filter((value, index, arr) => {
  return value.age > 25;
});
//console.log(user25);

const userNames = users.map((value) => value.name);
//console.log(userNames);

const activeUsersCount = users.reduce((accumulator, value) => {
  accumulator = value.active ? accumulator + 1 : accumulator;
  return accumulator;
}, 0);

//console.log(activeUsersCount);

const segUsers = users.reduce(
  (accumulator, value, index, arr) => {
    value.active
      ? accumulator.active.push(value)
      : accumulator.inactive.push(value);
    return accumulator;
  },
  {
    active: [],
    inactive: [],
  },
);
//console.log(segUsers);

// problem 3 --------------
// count only unresolved issues
// use reduce
// no second loop
// no if/else ladder if possible
//output
// {
//   high: 2,
//   medium: 0,
//   low: 0
// }

const issues = [
  { rule: "color-contrast", severity: "high", resolved: false },
  { rule: "aria-label", severity: "medium", resolved: true },
  { rule: "alt-text", severity: "high", resolved: false },
  { rule: "tab-order", severity: "low", resolved: true },
];

//solution 3----------
const counts = issues.reduce(
  (accumulator, value) => {
    !value.resolved && accumulator[value.severity]++;
    return accumulator;
  },
  {
    high: 0,
    medium: 0,
    low: 0,
  },
);
console.log(counts);
