const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	return array.reduce((acumulador, numero) => acumulador + numero, 0);
};

const multiply = function(array) {
  return array.reduce((acumulador, numero) => acumulador * numero, 1);
};

const power = function(base, exponente) {
  let acc = 1;
  for (let index = 0; index < exponente; index++) {
    acc *= base;
  }
  return acc;
};

const factorial = function(num) {
	let fact =  1;
  for (let index = 1; index <= num; index++) {
    fact *= index;
  }
  return fact;
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
