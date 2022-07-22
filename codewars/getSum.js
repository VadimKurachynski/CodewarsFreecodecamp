
function getSum(a, b) {
   let sum=0;
   if (a < b) {
      for (i = a; i <= b; i++) { sum += i; }
      return sum;
   }
   if (a > b) {
      for (i = b; i <= a; i++) { sum += i; }
      return sum;
   }
   return a;
}
console.log(getSum(10,1))//2