// Task 1
// let message = "";
// const user = {
//   age: 20,
//   hobby: "html",
//   name: "Mango",
//   premium: true,
// };

// user.mood = "happy";
// user["full time"] = true;
// user.hobby = "skydiving";
// user.premium = false;

// const keys = Object.keys(user);

// for (const key of keys) {
//   message += `${key}: ${user[key]}\n`;
// }

// console.log(message);
/*
'age : 20 
hobby : skydiving 
name : Mango 
premium : false 
mood : happy 
"full time" : true 
' */

// Task 2
// const countProps = function (obj) {
//   return Object.keys(obj).length;
// };

// console.log(countProps({})); // 0

// console.log(countProps({ a: 1, b: 1 })); // 2

// console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5

// Task 3
// Variant 1
// const findBestEmployee = function (employees) {
//   let justStats = Object.values(employees);
//   let bestStats = Math.max(...justStats);
//   let bestEmployeeName;

//   if (Object.keys(employees).length === 0) {
//     return "";
//   }

//   for (const key in employees) {
//     if (employees[key] === bestStats) {
//       bestEmployeeName = key;
//     }
//   }
//   return bestEmployeeName;
// };

// Variant 2
// const findBestEmployee = function (employees) {
//   let bestStats = 0;
//   let bestEmployeeName;

//   if (Object.keys(employees).length === 0) {
//     return "";
//   }

//   for (const key in employees) {
//     if (bestStats < employees[key]) {
//       bestStats = employees[key];
//       bestEmployeeName = key;
//     }
//   }

//   return bestEmployeeName;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   ann: 29,
//   david: 35,
//   helen: 1,
//   lorence: 99,
// };
// console.log(findBestEmployee(developers));
// // 'lorence'

// const supports = {
//   poly: 12,
//   mango: 17,
//   ajax: 4,
// };
// console.log(findBestEmployee(supports));
// // 'mango'

// const sellers = {
//   lux: 147,
//   david: 21,
//   kiwi: 19,
//   chelsy: 38,
// };
// console.log(findBestEmployee(sellers));
// // 'lux'

// const empty = {};
// console.log(findBestEmployee(empty));

// Task 4
// const countTotalSalary = function (employees) {
//   const totalArray = Object.values(employees);
//   let totalSalary = 0;

//   for (const item of totalArray) {
//     totalSalary += item;
//   }

//   return totalSalary;
// };

// // Объекты и ожидаемый результат
// const developers = {
//   mango: 300,
//   poly: 250,
//   alfred: 450,
// };
// console.log(countTotalSalary(developers));
// // 1000

// const supports = {
//   kiwi: 200,
//   lux: 150,
//   chelsy: 150,
// };
// console.log(countTotalSalary(supports));
// // 500

// const empty = {};
// console.log(countTotalSalary(empty));
// // 0

// Task 5
// function getAllPropValues(array, prop) {
//   let resultArray = [];

//   for (const item of array) {
//     for (const key in item) {
//       if (key === prop) {
//         resultArray.push(item[key]);
//       }
//     }
//   }

//   return resultArray;
// }

// // Объекты и ожидаемый результат
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Радар", price: 1280, quantity: 2 },
//   { name: "Радар", price: 1320, quantity: 1 },
//   { name: "Сканер", price: 2700, quantity: 1 },
//   { name: "Сканер", price: 2500, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 2 },
// ];

// console.log(getAllPropValues(products, "name"));
// // ['Радар', 'Радар', 'Радар', 'Сканер', 'Сканер', 'Дроид', 'Захват']

// console.log(getAllPropValues(products, "quantity"));
// // [4, 2, 1, 1, 3, 7, 2]

// console.log(getAllPropValues(products, "category"));
// //  []

// Task 6
function calculateTotalPrice(array, prop) {
  let total = 0;

  for (const item of array) {
    if (item.name === prop) {
      total += item.price * item.quantity;
    }
  }

  return total;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

//console.log(calculateTotalPrice(products, 'Дроид'));
// 2800
