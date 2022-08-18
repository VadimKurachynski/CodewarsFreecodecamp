
function findOutlier(integers){
    let integers2 = integers.filter(x => x%2==0);
    if (integers2.length==1){
        return Number(integers2.join())
    }else {
        return  Number(integers.filter(x => !integers2.includes(x)).join());
    }


   
   return integers2
  }
console.log(findOutlier([2,6,8,10,3]))