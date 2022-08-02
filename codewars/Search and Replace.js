
function myReplace(str, before, after) {

  return str.replace(before, (before[0].charCodeAt() < 97) ? after[0].toUpperCase() + after.slice(1) : after.toLowerCase())
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));