

function lovefunc(flower1, flower2) {

  let f1 = (flower1 % 2)
  let f2 = (flower2 % 2)
  if (f1 != f2) {
    return true;
  }
  return false;
}
console.log(lovefunc(5, 3));