
function fearNotLetter(str) {
  let x = "";
  for (let i = 0; i < str.length - 1; i++) {

    if (str[i + 1].charCodeAt() - str[i].charCodeAt() != 1) {
      x = String.fromCharCode(str[i].charCodeAt() + 1)
    }
  }
  if (x == "") { return undefined }
  return x
}


console.log(fearNotLetter("abcde"));