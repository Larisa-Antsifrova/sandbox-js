// const getItemsString = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = `${i + 1} - ${array[i]}`;
//   }
//   let result = array.join("\n");
//   return result;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

// const getItemsString = function (array) {
//   for (let i = 0; i < array.length; i += 1) {
//     array[i] = `${i + 1} - ${array[i]}`;
//   }
//   let result = array.join("\n");
//   return result;
// };

// console.log(getItemsString(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]));

// console.log(getItemsString([5, 10, 15]));

// console.log(typeof getItemsString([5, 10, 15]));

// 2nd task

// const calculateEngravingPrice = (message = "", pricePerWord = 0) => {
//   let wordsNumber = message.split(" ").length;
//   let total = wordsNumber * pricePerWord;
//   return total;
// };

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     10
//   )
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     "Proin sociis natoque et magnis parturient montes mus",
//     20
//   )
// ); // 160

// 3d task

// function findLongestWord(string = "") {
//   let allWords = string.split(" ");
//   let longestWord = allWords[0];

//   for (let i = 1; i < allWords.length; i += 1) {
//     if (longestWord.split("").length < allWords[i].split("").length) {
//       longestWord = allWords[i];
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// // 'jumped'

// console.log(findLongestWord("Google do a roll"));
// // 'Google'

// console.log(findLongestWord("May the force be with you"));
// // 'force'

// 4th task

// function formatString(string, maxLength = 40) {
//   if (string.split("").length <= maxLength) {
//     return string;
//   }
//   if (string.split("").length > maxLength) {
//     let shortString = string.split("").slice(0, maxLength);
//     console.log(shortString);
//     // return shortString.join("") + "...";

//     return `${shortString.join("")}...`;
//   }
// }

// console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// // 'Curabitur ligula sapien, tincidunt non.'

// console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // 'Vestibulum facilisis, purus nec pulvinar...'

// console.log(
//   formatString("Vestibulum facilisis, purus nec pulvinar iaculis.", 10)
// );

// 5th task
// var 1

// function checkForSpam(str) {
//   let allWords = str.toLowerCase().split(" ");

//   if (allWords.includes("spam") || allWords.includes("sale")) {
//     return true;
//   }

//   if (!allWords.includes("spam") || !allWords.includes("sale")) {
//     for (let i = 0; i < allWords.length; i += 1) {
//       allWords[i] = allWords[i].split("").slice(1, -1).join("");
//     }
//   }

//   if (allWords.includes("spam") || allWords.includes("sale")) {
//     return true;
//   }

//   return false;
// }

// console.log(checkForSpam("Latest Technology News")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); // false

// console.log(checkForSpam("Get best sale offers now!")); // true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// console.log(checkForSpam("SPAM How to earn fast money?")); // true

// console.log(checkForSpam("!SPAM! How to earn fast money?")); // true

// console.log(checkForSpam("!!!SPAM!!! How to earn fast money?")); // false
// console.log(checkForSpam("SPAM, How to earn fast money?")); // false

// var 2 - not working

// function checkForSpam(str) {
//   let allWords = str.toLowerCase().split("");

//   console.log(allWords);

//   if (
//     allWords.includes("s") &&
//     allWords.includes("a") &&
//     allWords.includes("l") &&
//     allWords.includes("e")
//   ) {
//     return true;
//   }

//   return false;
// }

// console.log(checkForSpam("Latest Technology News"));

// console.log(checkForSpam("JavaScript weekly newsletter"));

// console.log(checkForSpam("Get best sale offers now!"));

// console.log(checkForSpam("[SPAM] How to earn fast money?"));

// console.log(checkForSpam("SPAM How to earn fast money?"));

// console.log(checkForSpam("!SPAM! How to earn fast money?"));

// console.log(checkForSpam("!!!SPAM!!! How to earn fast money?"));

// console.log(checkForSpam("SPAM, How to earn fast money?"));

// var 3 - best working variant, but not for the autocheck :/

// function checkForSpam(str) {
//   let allWords = str.toLowerCase().split("");
//   console.log(allWords);

//   for (let i = 0; i < allWords.length; i += 1) {
//     let keyWord =
//       allWords[i] + allWords[i + 1] + allWords[i + 2] + allWords[i + 3];

//     if (keyWord === "sale" || keyWord === "spam") {
//       return true;
//     }
//   }

//   return false;
// }

// console.log(checkForSpam("Latest Technology News")); // false

// console.log(checkForSpam("JavaScript weekly newsletter")); //false

// console.log(checkForSpam("Get best sale offers now!")); //true

// console.log(checkForSpam("[SPAM] How to earn fast money?")); //true

// console.log(checkForSpam("SPAM How to earn fast money?")); //true

// console.log(checkForSpam("!SPAM! How to earn fast money?")); //true

// console.log(checkForSpam("!!!SPAM!!! How to earn fast money?")); //true

// console.log(checkForSpam("SPAM, How to earn fast money?")); //true

// console.log(checkForSpam("Check your homework! And come back for more")); // false

// task 6

// function mapArray(array) {
//   "use strict";
//   const numbers = new Array(array.length);
//   for (let i = 0; i < array.length; i += 1) {
//     // Write code under this line
//     numbers[i] = array[i] * 10;
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// console.log(mapArray(["lemon", 3, 5, 10, 11]));

// task 9

function isLoginValid(login, min = 4, max = 16) {
  // Write code under this line
  let newLogin = login.split("").length;
  if (newLogin >= 4 && newLogin <= 16) {
    return true;
  }

  return false;
}

function isLoginUnique(allLogins, login) {
  "use strict";
  // Write code under this line
  if (!allLogins.includes(login)) {
    return true;
  }

  return false;
}

function addLogin(allLogins, login) {
  "use strict";
  const SUCCESS = "Логин успешно добавлен!";
  const REFUSAL = "Такой логин уже используется!";
  const ERROR = "Ошибка! Логин должен быть размером от 4 до 16 символов";
  let message;
  // Write code under this line
  if (!isLoginValid(login)) {
    message = ERROR;
    return message;
  }

  if (!isLoginUnique(allLogins, login)) {
    message = REFUSAL;
    return message;
  }

  allLogins.push(login);
  message = SUCCESS;
  return message;
}

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

console.log(addLogin(logins, "Ajax"));
// 'Логин успешно добавлен!'

console.log(addLogin(logins, "robotGoogles"));
// 'Такой логин уже используется!'

console.log(addLogin(logins, "Zod"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, "jqueryisextremelyfast"));
// 'Ошибка! Логин должен быть от 4 до 16 символов'
