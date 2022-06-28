
function findSmallestInt(args) {
  return args.sort((a, b) => a - b)[0];
}

let args1 = [34, 15, 88, 2];
let args2 = [34, -345, -1, 100];
console.log(findSmallestInt(args2));

