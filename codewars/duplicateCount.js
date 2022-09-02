
function duplicateCount(text) {
  let x=0;
 let obj= text.toLowerCase().split("").reduce((sum, item) => {
    sum[item] = (sum[item] || 0) + 1;
    return sum;
  }, {})
  for (key in obj){
    if (obj[key]>=2){x+=1;}
  }
  return x;
}

console.log(duplicateCount("Indivisibility"))