let count = 0;

function cc(card) {

  let arr1 = [2, 3, 4, 5, 6];
  let arr3 = [10, "J", "Q", "K", "A"];

  if (arr1.includes(card)) { count += 1; console.log(11111111); }
  if (arr3.includes(card)) { count -= 1; console.log(22222222); }

  let val = Math.sign(count);
  if (val == 1) {
    return `${count} Bet`;
  } else return `${count} Hold`;
}
cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc());

