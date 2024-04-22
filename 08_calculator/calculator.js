const add = function(x,y) {
	let sum = x+y;
  return sum;
};

const subtract = function(x,y) {
  let sum = x-y;
  return sum;
};

const sum = function(x) {
	let sum = 0;
  for(let i = 0; i <= x.length -1; i++)
  {
    sum = sum + x[i]
  }
  return sum
};

const multiply = function(y) {
  let product = 1;
  for(let i = 0; i <= y.length-1; i++)
  {
    product = product * y[i];
  }
  return product;

};

const power = function(x,y) {
	let num = 1;
  for(let i = 0; i < y; i++)
    {
      num = num * x;
    }
    return num;
};

const factorial = function(x) {
  let num = 1
  for(let i = x; i > 0; i--)
    {
      num = num * i;
    }
  return num
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
