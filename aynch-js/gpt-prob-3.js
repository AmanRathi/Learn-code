function fetchUser(userId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (userId === 5) {
        resolve({ id: 5, name: "Aman" });
      } else {
        reject("User not found");
      }
    }, 600);
  });
}

function fetchWatchedMovies(userId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(["Inception", "Interstellar", "Tenet"]);
    }, 700);
  });
}

function fetchRecommendations(watchedMovies) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(["Arrival", "Blade Runner 2049", "The Matrix"]);
    }, 700);
  });
}

// Final result
// User: Aman
// Watched: Inception, Interstellar, Tenet
// Recommendations: Arrival, Blade Runner 2049, The Matrix

fetchUser(5)
  .then(function (user) {
    return fetchWatchedMovies(user.id).then(function (watchedMovies) {
      return { user: user, watchedMovies: watchedMovies };
    });
  })
  .then(function (data) {
    return fetchRecommendations(data.watchedMovies).then(function (
      recommendations
    ) {
      return {
        name: data.user.name,
        watched: data.watchedMovies,
        recommendations: recommendations,
      };
    });
  })
  .then(function (finalData) {
    console.log(`User: ${finalData.name}`);
    console.log(`Watched: ${finalData.watched.join(", ")}`);
    console.log(`Recommendations: ${finalData.recommendations.join(", ")}`);
  })
  .catch(function (err) {
    console.log(`Error: ${err}`);
  })
  .finally(function () {
    console.log("And we are done");
  });
