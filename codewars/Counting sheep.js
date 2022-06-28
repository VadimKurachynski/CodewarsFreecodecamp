function countSheeps(arrayOfSheep) {
  let sum = 0;
  for (let char of arrayOfSheep) {
    if (char === true) { sum += 1; }
  }
  return sum
}

let array1 = [true, true, true, false,
  true, true, true, true,
  true, false, true, false,
  true, false, false, true,
  true, true, true, true,
  false, false, true, true];

console.log(countSheeps(array1));