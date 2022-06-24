//"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]
function stringToArray(string) {
  let arr = string.split(' ');
  return arr;
}

let strnew = "I love arrays they are my favorite";
console.log(stringToArray(strnew));

