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

// Четырнадцатая задача - https://www.codewars.com/kata/562926c855ca9fdc4800005b/train/javascript

function numberToPower(number, power) {
  let result = 1;

  for (let i = 0; i < power; i++) {
    result *= number;
    console.log(result);
  }
  return result;
}

// console.log(numberToPower(4, 2)); // 16
// console.log(numberToPower(10, 4)); // 10000
// console.log(numberToPower(10, 0)); // 1

// Пятнадцатая задача - https://www.codewars.com/kata/5467e4d82edf8bbf40000155/train/javascript
function descendingOrder(n) {
  return Number(n.toString().split("").sort().reverse().join(""));
}

// console.log(descendingOrder(0)); // 0
// console.log(descendingOrder(1)); // 1
// console.log(descendingOrder(123456789)); // 987654321
// console.log(descendingOrder(1012)); //2110

// Шестнадцатая задача - https://www.codewars.com/kata/5f55ecd770692e001484af7d/train/javascript
// function mirror(data) {
//   let sortedArray = [...data].sort((a, b) => a - b);
//   return [...sortedArray, ...sortedArray.slice(0, -1).reverse()];
// }

// console.log(mirror([2, -3, 1]));
// console.log(mirror([-8, 42, 18, 0, -16]));

// Семнадцатая задача - https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript
function getPlanetName(id) {
  var name;
  switch (id) {
    case 1:
      name = "Mercury";
      break;
    case 2:
      name = "Venus";
      break;
    case 3:
      name = "Earth";
      break;
    case 4:
      name = "Mars";
      break;
    case 5:
      name = "Jupiter";
      break;
    case 6:
      name = "Saturn";
      break;
    case 7:
      name = "Uranus";
      break;
    case 8:
      name = "Neptune";
      break;
  }

  return name;
}

// console.log(getPlanetName(2); // "Venus"
// console.log(getPlanetName(5); // "Jupiter"
// console.log(getPlanetName(3); // "Earth"

// Восемнадцатая задача - https://www.codewars.com/kata/58b8c94b7df3f116eb00005b/train/javascript
function reverseLetter(str) {
  const abc = "abcdefghijklmnopqrstuvwxyz";
  let resultArray = [];
  let reversedArray = str.split("").reverse();
  for (const item of reversedArray) {
    if (abc.includes(item)) {
      resultArray.push(item);
    } else {
      continue;
    }
  }
  return resultArray.join("");
}

// console.log(reverseLetter("krishan")); // "nahsirk"
// console.log(reverseLetter("ultr53o?n")); // "nortlu"
// console.log(reverseLetter("ab23c")); // "cba"
// console.log(reverseLetter("krish21an")); // "nahsirk"

// Девятнадцатая задача - https://www.codewars.com/kata/57a0e5c372292dd76d000d7e/train/javascript
function repeatStr(n, s) {
  let result = "";
  for (let i = 0; i < n; i++) {
    result += s;
  }
  return result;
}

// console.log(repeatStr(3, "*")); // "***"
// console.log(repeatStr(5, "#")); // "#####"
// console.log(repeatStr(2, "ha ")); // "ha ha "

// Двадцатая задача -

function getCount(str) {
  let vowelsCount = 0;
  let vowels = "aeiou";

  for (const letter of str) {
    if (vowels.includes(letter)) {
      vowelsCount += 1;
    }
  }

  return vowelsCount;
}

// console.log(getCount("abracadabra")); //5

// Task number nex - https://www.codewars.com/kata/5b358a1e228d316283001892/train/javascript

function getStrings(city) {
  let resultObject = {};
  let result = "";

  for (const letter of city.toLowerCase()) {
    if (" -'".includes(letter)) {
      continue;
    }
    if (letter in resultObject) {
      resultObject[letter] += "*";
    } else {
      resultObject[letter] = "*";
    }
  }

  for (const key in resultObject) {
    result += `${key}:${resultObject[key]},`;
  }

  return result.slice(0, -1);
}

// console.log(getStrings("Chicago")); // "c:**,h:*,i:*,a:*,g:*,o:*"
// console.log(getStrings("Bangkok")); // "b:*,a:*,n:*,g:*,k:**,o:*"
// console.log(getStrings("Las Vegas")); // "l:*,a:**,s:**,v:*,e:*,g:*"

const calculateLetters = (word) => {
  const result = {};

  for (const letter of word.toLowerCase()) {
    if ("\n .,;!#".includes(letter)) {
      // '\n' - it's a symbol of line break
      continue;
    }

    if (letter in result) {
      result[letter]++;
    } else {
      result[letter] = 1;
    }
  }

  return result;
};

// Task - odd numbers

// function sortArray(array) {
//   let result = [];

//   for (const item of array) {
//     if (item % 2 !== 0) {
//       result.push(item);
//     }
//   }

//   result.sort((a, b) => a - b);

//   for (let i = 0; i <= array.length; i++) {
//     if (array[i] % 2 === 0) {
//       result.splice(array.indexOf(array[i]), 0, array[i]);
//     }
//   }

//   return result;
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4])); // [1, 3, 2, 8, 5, 4]
// console.log(sortArray([5, 3, 1, 8, 0])); // [1, 3, 5, 8, 0]
// console.log(sortArray([])); // []
// console.log(sortArray([5, 5, 8, 0, 5, 3, 1, 1, 2, 4, 3, 3])); // []

// Task - Singles - https://www.codewars.com/kata/59f11118a5e129e591000134/train/javascript
function repeats(arr) {
  let sum = 0;
  const numbersObject = {};

  for (const item of arr) {
    if (item in numbersObject) {
      numbersObject[item] += 1;
    } else {
      numbersObject[item] = 1;
    }
  }

  for (const key in numbersObject) {
    if (numbersObject[key] === 1) {
      sum += +key;
    }
  }
  return sum;
}

// console.log(repeats([4, 5, 7, 5, 4, 8])); // 15
// console.log(repeats([9, 10, 19, 13, 19, 13])); // 19
// console.log(repeats([16, 0, 11, 4, 8, 16, 0, 11])); // 12
// console.log(repeats([5, 17, 18, 11, 13, 18, 11, 13])); // 22
// console.log(repeats([5, 10, 19, 13, 10, 13])); // 24

// Task - Binary to Decimal

const binaryArrayToNumber = (arr) => {
  const reversedArray = arr.slice().reverse();
  let result = 0;

  for (let i = 0; i < reversedArray.length; i++) {
    result += reversedArray[i] * Math.pow(2, i);
  }

  return result;
};

// Solution of another developer via parseInt (base, radix)
// const binaryArrayToNumber = (arr) => {
//   return parseInt(arr.join(""), 2);
// };

// console.log(binaryArrayToNumber([0, 0, 0, 1])); // 1
// console.log(binaryArrayToNumber([0, 0, 1, 0])); // 2
// console.log(binaryArrayToNumber([1, 1, 1, 1])); // 15
// console.log(binaryArrayToNumber([1, 1, 1, 1, 1, 0, 1, 0])); // 15
// console.log(binaryArrayToNumber([0, 1, 1, 0])); // 6

// Task - Money, money, money

function calculateYears(principal, interest, tax, desired) {
  // let resultSum = principal + principal * interest - principal * interest * tax;
  let resultSum = principal;
  let years = 0;

  while (resultSum < desired) {
    years += 1;
    console.log(years);
    resultSum = resultSum + resultSum * interest - resultSum * interest * tax;
    console.log(resultSum);
  }
  return years;
}

// console.log(calculateYears(1000, 0.05, 0.18, 1100)); // 3
// console.log(calculateYears(1000, 0.01625, 0.18, 1200)); // 14
// console.log(calculateYears(1000, 0.05, 0.18, 1000)); // 0

// Task - inverted

function invert(array) {
  let invertedArray = [];
  for (const item of array) {
    invertedArray.push(-item);
  }

  return invertedArray;
}

// Another developer's solution. Nice
// function invert(array) {
//   return array.map((i) => 0 - i);
// }

// console.log(invert([1, 2, 3, 4, 5])); //[-1,-2,-3,-4,-5]
// console.log(invert([1, -2, 3, -4, 5])); //[-1,2,-3,4,-5]
// console.log(invert([])); //[]
// console.log(invert([0])); //[0]

// Task reduce

function getAverage(marks) {
  return Math.floor(
    marks.reduce((accum, value) => accum + value) / marks.length
  );
}

// console.log(getAverage([2, 2, 2, 2])); // 2
// console.log(getAverage([1, 2, 3, 4, 5])); // 3
// console.log(getAverage([1, 1, 1, 1, 1, 1, 1, 2])); // 1
// ==============================================================

// Task - ID

function nextId(ids) {
  let resultID = 0;
  ids.sort((a, b) => a - b);

  for (let i = 0; i < ids.length; i++) {
    if (ids[i] !== i && ids.indexOf(i) === -1) {
      return (resultID = i);
    } else {
      resultID = ids.length;
    }
  }
  return resultID;
}

// Another developer's solution
// function nextId(ids) {
//   var x = 0;
//   while (ids.includes(x)) x++;
//   return x;
// }

// console.log(nextId([0, 1, 2, 3, 5])); // 4
// console.log(nextId([0, 3, 3, 5, 1, 2, 3, 3, 3, 5])); // 4
// console.log(nextId([])); // 0
// console.log(nextId([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); // 11

// Task -fake Bi

function fakeBin(x) {
  let resultArray = [];

  for (let i = 0; i < x.length; i++) {
    resultArray[i] = x[i] < 5 ? 0 : 1;
  }
  return resultArray.join("");
}

// console.log(fakeBin("45385593107843568")); // "01011110001100111"
// console.log(fakeBin("509321967506747")); // "101000111101101"
// console.log(fakeBin("366058562030849490134388085")); // "011011110000101010000011011"

// Task - First letters

function fix(paragraph) {
  return paragraph
    .split(". ")
    .map((el) => el[0].toUpperCase() + el.slice(1))
    .join(". ");
}

// console.log(
//   fix("hello. my name is inigo montoya. you killed my father. prepare to die.")
// ); // "Hello. My name is inigo montoya. You killed my father. Prepare to die."

// Task - eviternity numbers :)

// function solve(a, b) {
//   let count = 0;
//   console.log((16).toString());

//   for (let i = a; i <= b; i++) {
//     if (i.toString().) {
//     }
//   }
// }

// console.log(solve(0, 100)); // 4
// console.log(solve(0, 1000)); // 14
// console.log(solve(0, 10000)); // 37
// console.log(solve(0, 100000)); // 103
// console.log(solve(0, 500000)); // 148

function arithmetic(a, b, operator) {
  let result;
  switch (operator) {
    case "add":
      result = a + b;
      break;

    case "subtract":
      result = a - b;
      break;

    case "multiply":
      result = a * b;
      break;

    case "divide":
      result = a / b;
      break;
  }
  return result;
}

// console.log(arithmetic(1, 2, "add")); // 3, "'add' should return the two numbers added together!"
// console.log(arithmetic(8, 2, "subtract")); // 6, "'subtract' should return a minus b!"
// console.log(arithmetic(5, 2, "multiply")); // 10, "'multiply' should return a multiplied by b!"
// console.log(arithmetic(8, 2, "divide")); // 4, "'divide' should return a divided by b!"
