function getCount(str) {
  let sum = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
    for (let vow of vowels) {
      if (vow === char) {
        sum = sum + 1;
        break;
      }
    }

  }
  return sum;
}
console.log(getCount("i am study a lot"))