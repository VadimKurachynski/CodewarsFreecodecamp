
function getIndexToIns(arr, num) {

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= num)
          return i;
      }
    
      return arr.length;


}

//getIndexToIns([10, 20, 30, 40, 50], 30);
//console.log(getIndexToIns([10, 20, 30, 40, 50], 55))//3
console.log(getIndexToIns([13,14], 15))//3
