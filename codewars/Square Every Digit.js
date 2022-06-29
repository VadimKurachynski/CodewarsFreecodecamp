function squareDigits(num) {
  let s = "";
  for (let char of String(num)) {
    s += (char ** 2);
  }
  return Number(s);
}

console.log(squareDigits(23459));