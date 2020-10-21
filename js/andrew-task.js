// ==================== Hotdogs task ====================
// Refactor 1
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

  // Iterrating the basket while iterrating data and forming the result
  for (const year of Object.entries(data)) {
    let sum = 0;

    for (const key of Object.keys(basket)) {
      sum += year[1][key] * basket[key];
    }

    result[year[0]] = sum;
  }

  return result;
};

// Checking the result in Console
console.log(countBasket(exampleBasket, data));

// // Varian 1
// // Initial data
// const exampleBasket = "1 hamburger, 4 hotdog, 2 coke, 4 milk";
// const data = {
//   2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//   2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//   2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
//   // Adding more entries for testing
//   2017: { hamburger: 2.25, hotdog: 1.15, coke: 1.15, milk: 0.7 },
//   2018: { hamburger: 2.75, hotdog: 1.75, coke: 1.25, milk: 0.8 },
//   2019: { hamburger: 3, hotdog: 1.75, coke: 1.25, milk: 0.9 },
//   2020: { hamburger: 3.25, hotdog: 1.8, coke: 1.5, milk: 1 },
// };

// // Function to turn the string basket into an object basket
// const stringToObject = (stringBasket) => {
//   const basket = {};
//   stringBasket
//     .split(", ")
//     .map((el) => el.split(" "))
//     .map((el) => (basket[el[1]] = +el[0]));
//   return basket;
// };

// // Function to count the price for the basket for different years
// const countBasket = (stringBasket, data) => {
//   // Turning the string basket into object basket with the help of stringToObject function
//   const basket = stringToObject(stringBasket);
//   // Declaring the object for final result
//   let result = {};

//   // Iterrating basket entries within iterated data entries to calculate the total price for each year
//   for (const year in data) {
//     let sum = 0;

//     for (const key in basket) {
//       sum += data[year][key] * basket[key];
//     }

//     result[year] = sum;
//   }

//   return result;
// };

// // Checking the result in Console
// console.log(countBasket(exampleBasket, data));

// ================= Varian by Dima P. ================
// const data = {
//   // YOU HAVE DATA WITH PRICES FOR PRODUCTS PER YEAR
//   2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//   2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//   2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
// };
// const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 }; // temporarily yearData
// const stringBasket = "1 hamburger, 4 hotdog, 2 coke, 4 milk";
// const parseBasket = (basket) => {
//   const goods = basket.split(", ");
//   const result = {};
//   for (const good of goods) {
//     const [count, name] = good.split(" ");
//     result[name] = Number(count);
//   }
//   return result;
// };
// const basket = parseBasket(stringBasket);
// const countYearBasket = (basket, year) => {
//   const basketEntries = Object.entries(basket);
//   let sum = 0;
//   for (const basketEntry of basketEntries) {
//     const [name, count] = basketEntry;
//     const priceFromYear = year[name];
//     sum += priceFromYear * count;
//   }
//   return sum;
// };
// console.log(countYearBasket(basket, yearData));

// const getBasketPerYears = (basket, data) => {
//   const years = Object.keys(data);
//   let resultObj = {};
//   for (const year of years) {
//     resultObj[year] = countYearBasket(basket, data[year]);
//   }
//   return resultObj;
// };
// console.log(getBasketPerYears(basket, data));

// ========== Variant by Viktor ==============

// // 4.3 compute Consumer Price Index (CPI)
// const stringBasket = "1 hamburger, 4 hotdog, 2 coke, 4 milk"; // YOU HAVE STRING
// // {                                                          // VERY CONVENIENTLY TO GET OBJECT FROM STRING
// //   hamburger: 1,
// //   hotdog: 4,
// //   coke: 2,
// //   milk: 4
// // }

// const data = {
//   // YOU HAVE DATA WITH PRICES FOR PRODUCTS PER YEAR
//   2014: { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 },
//   2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//   2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
// };

// const yearData = { hamburger: 1.25, hotdog: 1, coke: 0.5, milk: 0.4 }; // temporarily yearData

// const parseBasket = (basket) => {
//   const goods = basket.split(", ");
//   const result = {};

//   for (const good of goods) {
//     const [count, name] = good.split(" ");

//     result[name] = Number(count);
//   }

//   return result;
// };

// const basket = parseBasket(stringBasket);

// const countYearBasket = (basket, year) => {
//   const basketEntries = Object.entries(basket);
//   let sum = 0;

//   for (const basketEntry of basketEntries) {
//     const [name, count] = basketEntry;
//     const priceFromYear = year[name];

//     sum += priceFromYear * count;
//   }

//   return sum;
// };

// console.log(countYearBasket(basket, yearData));

// const getBasketPerYears = (basket, year) => {
//   // write some code to get solution
//   // use existing functions
//   // YOU NEED TO CALCULATE OBJECT WITH COST OF BASKET PER YEAR
//   // const prices = {
//   //     2014: 7.85 === 1 * 1,25 + 4 * 1 + 2 * 0.5 + 4 * 0.4
//   //     2015: 9.65 === 1 * 1,25 + 4 * 1.25 + 2 * 0.7 + 4 * 0.5
//   //     2016: 10.9 === 1 * 2.5 + 4 * 1 + 2 * 1 + 4 * 0.6
//   // }
//   const basketEntries = Object.entries(basket);
//   let sum14 = 0;
//   let sum15 = 0;
//   let sum16 = 0;

//   for (const basketEntry of basketEntries) {
//     const [name, count] = basketEntry;
//     const priceFromYear14 = year["2014"][name];
//     const priceFromYear15 = year["2015"][name];
//     const priceFromYear16 = year["2016"][name];

//     sum14 += priceFromYear14 * count;
//     sum15 += priceFromYear15 * count;
//     sum16 += priceFromYear16 * count;
//   }
//   return `2014: ${sum14}\n2015: ${sum15}\n2016: ${sum16}`;
// };

// console.log(getBasketPerYears(basket, data));

// ========== Variant by Nata =============

// const getBasketPerYears = (basket, data) => {
//   const dataYear = Object.entries(data);
//   // console.log(dataYear);
//   let result = {};
//   for (const oneYear of dataYear) {
//     //console.log(oneYear)
//     const countAllBasket = countYearBasket(basket, oneYear[1]);
//     //console.log(countAllYear)
//     result += `${oneYear[0]} : basket ${countAllBasket}\n `;
//   }
//   return result;
// };
// console.log(getBasketPerYears(basket, data));

// ========== Variant by Kate Lu =============
// // === Гамбургер ==
// // 1. завдання з такого списку:  1 hamburger, 4 hotdog, 2 coke, 4 milk' зробити ось такий: сake: 2, hamburger: 1;
// // приймає рядок і повертає об'єкет
// const parselBasket = (basket) => {
//   const goods = basket.split(`, `);
//   const result = {};
//   for (const good of goods) {
//     const [count, name] = good.split(" "); // називає окремо 1 - сount і ім'я - name;
//     result[name] = Number(count);
//   }
//   return result;
// };
// const basket = parselBasket("1 hamburger, 4 hotdog, 2 coke, 4 milk");
// const data = {
//   2014: { hamburger: 1, coke: 0.5, milk: 0.4 },
//   2015: { hamburger: 1.25, hotdog: 1.25, coke: 0.7, milk: 0.5 },
//   2016: { hamburger: 2.5, hotdog: 1, coke: 1, milk: 0.6 },
// };
// const x = basket;
// let y = data;

// const countPrice = function (x, y) {
//   // підраховує загальну вартість продкутів в кожному році
//   const basketLists = Object.entries(x); // кількість продуктів в корзині
//   let sum = 0;
//   for (const basketList of basketLists) {
//     const [name, count] = basketList;
//     const priceForYear = y[name];
//     if (y[name] === undefined) {
//       continue;
//     }
//     sum += priceForYear * count;
//   }
//   return sum;
// };

// const CountPricePerYear = () => {
//   /// форматує значення у форматі дата: сума
//   for (let [yearsName, pricePerYear] of Object.entries(data)) {
//     pricePerYear = countPrice(basket, pricePerYear);
//     console.log(`${yearsName} : ${pricePerYear}`);
//   }
// };

// CountPricePerYear();
