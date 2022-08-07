function wave(str) {

  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] != " ") {
      arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1, str.length))
    }
  }
  return arr;
}
console.log(wave("two words"))
