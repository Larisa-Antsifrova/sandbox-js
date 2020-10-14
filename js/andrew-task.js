// ==================== final ====================

// Initial data
const exampleBasket = "1 hamburger, 4 hotdog, 2 coke, 4 milk";
const data = {
  2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
  2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
  2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
  // Adding more entries for testing
  2017: { hamburger: 2.25, hotdog: 1.15, coke: 1.15, milk: 0.7 },
  2018: { hamburger: 2.75, hotdog: 1.75, coke: 1.25, milk: 0.8 },
  2019: { hamburger: 3, hotdog: 1.75, coke: 1.25, milk: 0.9 },
  2020: { hamburger: 3.25, hotdog: 1.8, coke: 1.5, milk: 1 },
};

// Function to turn the string basket into an object basket
const stringToObject = (stringBasket) => {
  const basket = {};
  stringBasket
    .split(", ")
    .map((el) => el.split(" "))
    .map((el) => (basket[el[1]] = +el[0]));
  return basket;
};

// Function to count the price for the basket for different years
const countBasket = (stringBasket, data) => {
  // Turning the string basket into object basket with the help of stringToObject function
  const basket = stringToObject(stringBasket);
  // Declaring the object for final result
  let result = {};

  // Iterrating basket entries within iterated data entries to calculate the total price for each year
  for (const year in data) {
    let sum = 0;

    for (const key in basket) {
      sum += data[year][key] * basket[key];
    }

    result[year] = sum;
  }

  return result;
};

// Checking the result in Console
console.log(countBasket(exampleBasket, data));
