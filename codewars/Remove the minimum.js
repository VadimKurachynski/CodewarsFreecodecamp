function removeSmallest(numbers) {

  if (numbers.length == 0) return numbers;
  let id = numbers.indexOf(Math.min(...numbers));
  let numberFinish = numbers.slice(0);
  numberFinish.splice(id, 1);
  return numberFinish;
}
console.log(removeSmallest([5, 3, 2, 1, 4]))