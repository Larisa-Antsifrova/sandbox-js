// Первая задача - https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
// let str = "nowaytogiveup";

// let rest = str.slice(1, str.length - 1);

// console.log(rest);

// Вторая задача - https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

function highAndLow(numbers) {
  let allNumbers = numbers.split(" ");

  for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i] = Number(allNumbers[i]);
  }

  return `${Math.max(...allNumbers)} ${Math.min(...allNumbers)}`;
}

// Вторая задача - решение другого разработчика :)

// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));
console.log(highAndLow("1 1"));

// Третья задача - https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

// function solution(str) {
//   return str.split("").reverse().join("");
// }
// console.log(solution("world"));

// Четвертая задача - https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(bullets, dragons) {
//   if (bullets >= dragons * 2) {
//     return true;
//   }

//   return false;
// }

// console.log((hero(10, 5), true));
// console.log((hero(7, 4), false));
// console.log((hero(4, 5), false));
// console.log((hero(100, 40), true));
// console.log((hero(1500, 751), false));
// console.log((hero(0, 1), false));

// Пятая задача - https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
// function isDivideBy(number, a, b) {
//   return number % a === 0 && number % b === 0 ? true : false;
// }
// console.log((isDivideBy(-12, 2, -6), true));
// console.log((isDivideBy(-12, 2, -5), false));
// console.log((isDivideBy(45, 1, 6), false));
// console.log((isDivideBy(45, 5, 15), true));
// console.log((isDivideBy(4, 1, 4), true));
// console.log((isDivideBy(15, -5, 3), true));
