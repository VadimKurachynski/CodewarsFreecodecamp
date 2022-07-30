let d = "";
const binaryArrayToNumber = arr => {
  return parseInt(arr.reduce((sum, x) => sum += String(x)), 2)
};

console.log(binaryArrayToNumber([1, 1, 1, 1]))