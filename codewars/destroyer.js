
function destroyer(arr) {

  let arr2 = [];
  for (let i = 1; i < arguments.length; i++) {
    arr2.push(arguments[i]);
  }
  let mass1 = arr.filter(el => !arr2.includes(el))
  let mass2 = arr2.filter(el => !arr.includes(el))
  return mass1.concat(mass2)


}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3))
    //destroyer([1, 2, 3, 1, 2, 3], 2, 3);