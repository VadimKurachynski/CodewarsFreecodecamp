
function findEvenIndex(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr.slice(0, i).reduce((a, b) => a + b, 0) == arr.slice(i + 1).reduce((a, b) => a + b, 0)) { return i };
  }
  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 5, 6]))