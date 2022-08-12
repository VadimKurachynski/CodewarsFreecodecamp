
function comp(array1, array2) {
  if(array1.length==0 ||array2.length==0){return true}
  let ar1 = array1.sort((a, b) => a - b)
  let ar2 = array2.sort((a, b) => a - b)
  for (let i = 0; i < ar1.length; i++) {
    if (ar1[i] * ar1[i] != ar2[i]) { return false }
  }
  return true
}


a1 = [121, 144, 19, 161, 19, 144, 19, 11];
a2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
console.log(comp(a1, a2))