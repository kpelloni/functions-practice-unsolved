// Named function
function getValueWithConditionOne(a, b) {
  if (a >= 40 && b >= 40) {
    return a + b;
  } else {
    return 2 * (a + b);
  }
}

// Arrow function
const getValueWithConditionTwo = (a, b) => {
  if (a >= 40 && b >= 40) {
    return a + b;
  } else {
    return 2 * (a + b);
  }
};

// Function expression
const getValueWithConditionThree = function(a, b) {
  if (a >= 40 && b >= 40) {
    return a + b;
  } else {
    return 2 * (a + b);
  }
};

console.log(getValueWithConditionOne(45, 32))
console.log(getValueWithConditionTwo(22, 22))
console.log(getValueWithConditionThree(54, 76))