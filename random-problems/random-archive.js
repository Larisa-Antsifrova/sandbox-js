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
