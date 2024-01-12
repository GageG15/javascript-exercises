const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function([...n]) {
  let numbers = [...n];
  let summary = numbers.reduce((a, b) => a + b, 0);
  return summary;
}

const multiply = function([...n]) {
  let multipliers = [...n];
  let product = multipliers.reduce((a, b) => a * b);
  return product;
};

const power = function(a, b) {
  let multiple = 1;
  for (i = 0; i < b; i++){
      multiple *= a;
  }
  return multiple;
};

const factorial = function(a) {
    let stop = 1;
    for (i = 1; i <= a; i++){
        stop *= i;
    }
	return stop;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
