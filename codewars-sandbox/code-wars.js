// CodeWars. Next Kata
const recoverSecret = (triplets) => {
  let tripletsCopy = triplets.slice(); // Creating a triplets copy to avoid original array mutations
  let uniqueLetters = Array.from(new Set(triplets.flat())); // Getting an array of unique letters found in the triplets
  const length = uniqueLetters.length; // Saving the total number of unique letters

  const result = []; // Declaring a temporary array to store the next found letter

  for (let i = 0; i < length; i++) {
    // Finding the letter among unique ones that either occupies the first position or does not exist in the triplets
    const nextLetter = uniqueLetters.find((letter) => tripletsCopy.every((triplet) => triplet.indexOf(letter) <= 0));
    // Pushing the found letter to the result
    result.push(nextLetter);
    // Removing the found letter from all the triplets
    tripletsCopy = tripletsCopy.map((triplet) => triplet.filter((letter) => !result.includes(letter)));
    // Removing the found letter from the unique letters
    uniqueLetters = uniqueLetters.filter((letter) => letter !== nextLetter);
  }

  return result.join(""); // Returning the result as a string
};

// Data for testing: Expected result: "whatisup"
const triplets1 = [
  ["t", "u", "p"],
  ["w", "h", "i"],
  ["t", "s", "u"],
  ["a", "t", "s"],
  ["h", "a", "p"],
  ["t", "i", "s"],
  ["w", "h", "s"],
];
// Testing
// console.log(recoverSecret(triplets1)); // Result: "whatisup"

function twistedSum(n) {
  if (!n) {
    return 0;
  }

  if (n > 9) {
    return ("" + n).split("").reduce((acc, v) => acc + +v, 0) + twistedSum(n - 1);
  }

  return n + twistedSum(n - 1);
}

console.log(twistedSum(15)); //66
