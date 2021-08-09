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

console.log(rearrangePairs(array));
