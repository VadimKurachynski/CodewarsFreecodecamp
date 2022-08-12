function findUniq(arr) {
  arr.sort();
  if (arr[0] == arr[1])
    return arr[arr.length - 1];
  return arr[0];
}

console.log(findUniq([1, 1, 1, 2, 1, 1]))
