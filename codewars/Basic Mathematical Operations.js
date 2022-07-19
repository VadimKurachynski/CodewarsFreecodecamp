
function basicOp(operation, value1, value2) {
  
  return eval(value1 + operation + value2);
}
console.log(basicOp('/', 49, 7));


// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7