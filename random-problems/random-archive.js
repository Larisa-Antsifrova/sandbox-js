// Archived solutions

// add function
function add(...args) {
  if (args.length > 1) {
    return args[0] + args[1];
  }

  return function (m) {
    return m + args[0];
  };
}

// console.log(add(1, 2));
// console.log(add(1)(2));

// Nesting level calculator
const appRef = document.getElementById('app');

function calculateMaxNestingDepth(htmlRef, currentLevel = 0) {
  if (!htmlRef.children.length) {
    return currentLevel;
  }

  currentLevel += 1;
  let maxDepth = currentLevel;

  Array.from(htmlRef.children).forEach(
    element =>
      (maxDepth = Math.max(
        calculateMaxNestingDepth(element, currentLevel),
        maxDepth,
      )),
  );

  return maxDepth;
}

// console.log(calculateMaxNestingDepth(appRef));

// Unique pairs function
const array = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4];

function rearrangePairs(array) {
  const result = [];
  const uniqueValues = array.filter((v, i, a) => a.indexOf(v) === i);
  const normalizedArr = uniqueValues.map(value =>
    array.filter(el => el === value),
  );

  while (normalizedArr.some(subArr => subArr.length > 0)) {
    normalizedArr.forEach(subArr => {
      if (subArr.length >= 2) {
        result.push(...subArr.splice(0, 2));
      } else if (subArr.length === 1) {
        result.push(...subArr.splice(0));
      }
    });
  }

  return result;
}

// console.log(rearrangePairs(array));

// Anagram detector
function isAnagram(firstWord, secondWord) {
  return (
    firstWord.split('').sort().join('') === secondWord.split('').sort().join('')
  );
}

// console.log(isAnagram('ANAGRAM', 'MGANRAA'));

// Unique values
const newArr = [1, 9, 0, 1, 5, 9, 1, 6];

function leaveUnique(newArr) {
  return newArr.reduce((acc, value) => {
    return acc.includes(value) ? acc : [...acc, value];
  }, []);
}

// leaveUnique(newArr);
