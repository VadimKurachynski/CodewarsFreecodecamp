function largestOfFour(arr) {
  let arrmax = [];
  for (let i = 0; i < arr.length; i++) {
    arrmax.push(Math.max(...arr[i]))
  }
  return arrmax;
}

console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])) 