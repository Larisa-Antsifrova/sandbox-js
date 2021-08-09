// Unique pairs function
const array = [1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 4];

function rearrangePairs(array) {
  const result = [];
  const buffer = [];
  let counter = 0;
  let prevValue = null;

  array.forEach(element => {
    if (element !== prevValue) {
      counter = 1;
      result.push(element);
    } else if (element === prevValue && !(counter > 1)) {
      counter += 1;
      result.push(element);
    } else if (element === prevValue && counter > 1) {
      buffer.push(element);
    }

    prevValue = element;
    console.log('counter', counter);
  });
  console.log('buffer', buffer);
  return result;
}

console.log(rearrangePairs(array));
