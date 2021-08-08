// add function
function add(...args) {
  if (args.length > 1) {
    return args[0] + args[1];
  }

  return function (m) {
    return m + args[0];
  };
}

console.log(add(1, 2));
console.log(add(1)(2));
