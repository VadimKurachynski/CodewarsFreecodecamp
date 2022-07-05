function firstNonConsecutive(arr) {

    for (let i = 0; i < arr.length - 1; ++i) {
      if (arr[i] + 1 !== arr[i + 1]) {
        return arr[i + 1]
      }
    }
    return null
  }

console.log(firstNonConsecutive([1, 2, 3, 4, 5, 8, 9]));
// let b = [1, 2, 2, 1, 1, 1];
// let n = 1;
// let x1 = b.indexOf(n);
// let x2 = b.lastIndexOf(n);
// console.log(x1, "  ", x2);