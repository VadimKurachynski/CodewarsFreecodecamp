function doubleChar(str) {
  let dobl = "";
  for (let char of str) {
    dobl += char + char;
  }
  return dobl;
}

let strnew = "privet";
console.log(doubleChar(strnew));