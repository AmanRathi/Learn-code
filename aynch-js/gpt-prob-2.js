function fetchProduct(productId) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (productId === 101) {
        resolve({ id: 101, name: "Keyboard", price: 2000 });
      } else {
        reject("Product not found");
      }
    }, 800);
  });
}

function fetchDiscount(productId) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve(10); // 10% discount
    }, 800);
  });
}

function applyTax(price) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      var taxedPrice = price * 1.18; // 18% tax
      resolve(taxedPrice);
    }, 500);
  });
}

// Final result:
// Product: Keyboard
// Final Price: <amount>

fetchProduct(101)
  .then(function (product) {
    return fetchDiscount(product.id).then(function (discount) {
      // console.log(discount);
      // console.log(product);
      return { product, discount };
    });
  })
  .then(function (data) {
    data.product.price =
      data.product.price - (data.product.price * data.discount) / 100;
    return applyTax(data.product.price).then(function (finalPrice) {
      return { name: data.product.name, finalPrice: finalPrice };
    });
  })
  .then(function (finalData) {
    console.log(`Product: ${finalData.name}`);
    console.log(`Final price: ${finalData.finalPrice}`);
  })
  .catch(function (err) {
    console.log(err);
  })
  .finally(function () {
    console.log("And we are done ☑️");
  });
