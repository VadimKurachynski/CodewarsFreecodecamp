

function sum(arr, n) {

  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }

}

let arr = [2, 3, 4, 5];
let n = 3;
console.log(sum(arr, n));

