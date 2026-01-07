//Promise creation
function makeUser(userDetails) {
  let user = new Promise(function (resolve, reject) {
    //Reject a stident if the age of the student is less than 18 year
    if (userDetails.age < 18) {
      reject(
        `${userDetails.name} is not yet adult, hence rejecting. Age: ${userDetails.age}`
      );
    }

    //create a student after waiting for one second
    setTimeout(function () {
      resolve(
        `Promise to create a user is done: ${Object.values(userDetails).join(
          ", "
        )}`
      );
    }, 1000);
  });
  return user;
}

//Calling promise and chaining
makeUser({ name: "Aman Rathi", age: 35 })
  .then(function (user) {
    console.log(user);
    return makeUser({ name: "Friend", age: 30 });
  })
  .then(function (user) {
    console.log(user);
    return makeUser({ name: "Friend 2", age: 33 });
  })
  .then(function (user) {
    console.log(user);
  });

//create multiple users all at once using Promise.all
//Note: Promise.race() can also take multiple promises and return whichever finishes the first
const ajay = makeUser({ name: "Ajay", age: 33 });
const abhi = makeUser({ name: "Abhi", age: 29 });
const adi = makeUser({ name: "Adi", age: 31 });

const makeMultipleUsers = Promise.all([ajay, abhi, adi]);

makeMultipleUsers.then(function (users) {
  console.log(users.join("\n"));
});

//creating a promise which will be getting rejected. Use Promise.allsettled() if want to resolve all irresepective of any error
makeUser({ name: "Ankit", age: 17 })
  .then(function (user) {
    console.log(user);
  })
  .catch(function (user) {
    console.log(user);
  });
