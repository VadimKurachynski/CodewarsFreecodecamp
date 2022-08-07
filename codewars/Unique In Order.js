var uniqueInOrder = function (iterable) {
  let x = typeof (iterable);
  let s1 = [], s2 = [];
  (x === "string") ? s1 = iterable.split("") : s1 = iterable.slice();
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s1[i + 1]) {
      s2.push(s1[i])
    } else continue;
  }
  return s2;


}

//console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder([1, 2, 2, 3]));

  //== ['A', 'B', 'C', 'D', 'A', 'B']
 // == [1,2,3]