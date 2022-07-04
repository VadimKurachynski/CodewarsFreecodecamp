function sum(numbers) {
  if (numbers.length == 0) { return 0 };
  let result = numbers.reduce(function (sum, elem) {
    return sum + elem;
  })
  return result;
};
console.log(sum([]));