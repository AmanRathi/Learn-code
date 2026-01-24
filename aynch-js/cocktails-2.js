async function showCoktailks() {
  try {
    var data = await fetch(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    var cocktails = await data.json();
    console.log(cocktails);
  } catch {
    console.log("Error");
  }
}

showCoktailks();
