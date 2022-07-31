
function stray(numbers) {
  let n = numbers.sort((a, b) => a - b)
  return (n[0] != n[1]) ? n[0] : n[n.length - 1];

}
console.log(stray([1, 1, 2]))