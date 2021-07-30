// Archived solutions
const recoverSecret = triplets => {
  let tripletsCopy = triplets.slice(); 
  let uniqueLetters = Array.from(new Set(triplets.flat())); 
  const length = uniqueLetters.length; 

  const result = []; 

  for (let i = 0; i < length; i++) {
    const nextLetter = uniqueLetters.find(letter =>
      tripletsCopy.every(triplet => triplet.indexOf(letter) <= 0)
    );
    result.push(nextLetter);
    tripletsCopy = tripletsCopy.map(triplet =>
      triplet.filter(letter => !result.includes(letter))
    );
    uniqueLetters = uniqueLetters.filter(letter => letter !== nextLetter);
  }

  return result.join(''); 
};

const triplets1 = [
  ['t', 'u', 'p'],
  ['w', 'h', 'i'],
  ['t', 's', 'u'],
  ['a', 't', 's'],
  ['h', 'a', 'p'],
  ['t', 'i', 's'],
  ['w', 'h', 's']
];

console.log(recoverSecret(triplets1)); // Result: "whatisup"
