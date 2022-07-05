function firstNonConsecutive(arr) {

  let massN = [];
  for (i = 0; i < arr.length - 1; i++) {
    massN.push(arr[i + 1] - arr[i]);
  }
  console.log(massN);
  const index = massN.findIndex(el => massN.indexOf(el) === massN.lastIndexOf(el));
 return index;
  //if (index === -1) return 0;






  return arr[index + 1];




}
//console.log(firstNonConsecutive([-5,-4,-2,0,1,2,3]));
let b=[ 1, 2, 2, 1, 1, 1];
 let n = 1;
 let x1 = b.indexOf(n);
 let x2 = b.lastIndexOf(n);
 console.log(x1, "  ", x2);