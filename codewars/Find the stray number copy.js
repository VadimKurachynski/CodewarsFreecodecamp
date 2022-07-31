
function stray(numbers) {

  return numbers.reduce((x, y) => y ^ x);

}
console.log(stray([1, 2, 1, 1, 1, 1, 5]))