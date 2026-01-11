function fetchUser(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (userId === 1) {
        resolve({ id: 1, name: "Aman" });
      } else {
        reject("User not found");
      }
    }, 1000);
  });
}

function fetchOrders(userId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve([
        { id: 101, amount: 250 },
        { id: 102, amount: 450 },
        { id: 103, amount: 300 },
      ]);
    }, 1000);
  });
}

function calculateTotal(orders) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var total = 0;
      for (var i = 0; i < orders.length; i++) {
        total += orders[i].amount;
      }
      resolve(total);
    }, 500);
  });
}

//Expected output:
//User: Aman
//Total Spent: 1000

fetchUser(1)
  .then(function (user) {
    return fetchOrders(user.id).then(function (orders) {
      return { user, orders };
    });
  })
  .then(function (data) {
    return calculateTotal(data.orders).then(function (total) {
      return { username: data.user.name, total: total };
    });
  })
  .then(function (data) {
    console.log(`User: ${data.username}`);
    console.log(`Totla spent: ${data.total}`);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("Process completed");
  });
