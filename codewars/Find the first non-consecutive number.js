function firstNonConsecutive(arr) {
  let massN = [];
  for (i = 0; i < arr.length - 1; i++) {
    massN.push(arr[i + 1] - arr[i]);
  }
  const index = massN.findIndex(el => massN.indexOf(el) === massN.lastIndexOf(el));
  if (index === -1) return 0;
  return arr[index + 1];
}
console.log(firstNonConsecutive([1, 2, 3, 4, 5, 8, 9]));
// let b = [1, 2, 2, 1, 1, 1];
// let n = 1;
// let x1 = b.indexOf(n);
// let x2 = b.lastIndexOf(n);
// console.log(x1, "  ", x2);