fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (err) {
    console.log(err);
  });
