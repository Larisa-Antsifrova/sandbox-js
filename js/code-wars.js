// Первая задача - https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0/train/javascript
let str = "nowaytogiveup";
let rest = str.slice(1, str.length - 1);

// console.log(rest);

// Вторая задача - https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript
function highAndLow(numbers) {
  let allNumbers = numbers.split(" ");

  for (let i = 0; i < allNumbers.length; i++) {
    allNumbers[i] = Number(allNumbers[i]);
  }

  return `${Math.max(...allNumbers)} ${Math.min(...allNumbers)}`;
}

// Решение другого разработчика :)
// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
// }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")); // "542 -214"
// console.log(highAndLow("1 1")); // "1 1"

// Третья задача - https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
function solution(str) {
  return str.split("").reverse().join("");
}

// console.log(solution("world"));

// Четвертая задача - https://www.codewars.com/kata/59ca8246d751df55cc00014c
function hero(bullets, dragons) {
  if (bullets >= dragons * 2) {
    return true;
  }

  return false;
}

// console.log((hero(10, 5), true));
// console.log((hero(7, 4), false));
// console.log((hero(4, 5), false));
// console.log((hero(100, 40), true));
// console.log((hero(1500, 751), false));
// console.log((hero(0, 1), false));

// Пятая задача - https://www.codewars.com/kata/5a2b703dc5e2845c0900005a
function isDivideBy(number, a, b) {
  return number % a === 0 && number % b === 0 ? true : false;
}

// console.log((isDivideBy(-12, 2, -6), true));
// console.log((isDivideBy(-12, 2, -5), false));
// console.log((isDivideBy(45, 1, 6), false));
// console.log((isDivideBy(45, 5, 15), true));
// console.log((isDivideBy(4, 1, 4), true));
// console.log((isDivideBy(15, -5, 3), true));

// Шестая задача - https://www.codewars.com/kata/545cedaa9943f7fe7b000048
const isPangram = (string) => {
  let stringLowCase = string.toLowerCase();
  let abc = "abcdefghijklmnopqrstuvwxyz";
  let counter = 0;
  for (let letter of abc) {
    if (stringLowCase.includes(letter)) {
      continue;
    } else {
      counter += 1;
    }
  }
  if (counter > 0) {
    return false;
  } else {
    return true;
  }
};

// console.log(isPangram("The quick brown fox jumps over the lazy dog."));
// console.log(isPangram("This is not a pangram."));
// console.log(isPangram("Bears do not eat cuctai"));

// Седьмая задача - https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/javascript
function reverseWords(str) {
  let words = str.split(" ");

  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].split("").reverse().join("");
  }

  return words.join(" ");
}

// Solution of another developer. Beautiful.
// function reverseWords(str) {
//   return str.split("").reverse().join("").split(" ").reverse().join(" ");
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog."));
// console.log(reverseWords("apple"));
// console.log(reverseWords("a b c d"));
// console.log(reverseWords("double  spaced  words"));

// Восьмая задача - https://www.codewars.com/kata/56606694ec01347ce800001b/train/javascript
function isTriangle(a, b, c) {
  if (a + b > c && b + c > a && a + c > b) {
    return true;
  }
  return false;
}

// console.log(isTriangle(1, 2, 2)); //true
// console.log(isTriangle(7, 2, 2)); //false

// Девятая задача - https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
const summation = (num) => {
  let total = 0;
  for (let i = 0; i <= num; i++) {
    total += i;
  }
  return total;
};

// console.log(summation(1));
// console.log(summation(8));

// Десятая задача - https://www.codewars.com/kata/55a70521798b14d4750000a4/train/javascript
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}

// console.log(greet("Ryan"));
// console.log(greet("Shingles"));

// Одиннадцатая задача - https://www.codewars.com/kata/5a0be7ea8ba914fc9c00006b
function sakuraFall(v) {
  return v <= 0 ? 0 : (5 * 80) / v;
}

// console.log(sakuraFall(5));
// console.log(sakuraFall(10));
// console.log(sakuraFall(-1));
// console.log(sakuraFall(0));

// Двенадцатая задача - https://www.codewars.com/kata/55eca815d0d20962e1000106/train/javascript
function generateRange(min, max, step) {
  let range = [];
  for (let i = min; i <= max; i += step) {
    range.push(i);
  }
  return range;
}

// console.log(generateRange(2, 10, 2)); // [2, 4, 6, 8, 10]
// console.log(generateRange(1, 15, 3)); // [1, 4, 7, 10, 13]

// Тринадцатая задача - https://www.codewars.com/kata/55ca77fa094a2af31f00002a/train/javascript
const laLigaGoals = 43;
const championsLeagueGoals = 10;
const copaDelReyGoals = 5;

// const totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals;
// console.log(totalGoals);
