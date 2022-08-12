
function checkCashRegister(price, cash, cid) {
  let n = [100, 20, 10, 5, 1, 0.25, 0.1, 0.05, 0.01];
  let mass = [];
  let cid2 = JSON.parse(JSON.stringify(cid)).reverse();
  let summ = cash - price;
  let sumMag = 0;
  for (let i = 0; i <= 8; i++) {
    let sn = 0;
    sumMag += cid2[i][1];
    while (summ >= n[i] && cid2[i][1] >= n[i]) {
      cid2[i][1] = Number((cid2[i][1] - n[i]).toFixed(2));
      summ = Number((summ - n[i]).toFixed(2));
      sn += n[i];
    }
    if (sn > 0) { mass.push([cid2[i][0], sn]) }
  }
  if (summ == 0 && cash - price - sumMag == 0) { return { status: "CLOSED", change: cid } };
  if (summ == 0) { return { status: "OPEN", change: mass } };
  return { status: "INSUFFICIENT_FUNDS", change: [] };

}

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
//                            price,cash
//console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
  //{status: "OPEN", change: [["QUARTER", 0.5]]}

  // Currency Unit	Amount
  // Penny	$0.01 (PENNY)
  // Nickel	$0.05 (NICKEL)
  // Dime	$0.1 (DIME)
  // Quarter	$0.25 (QUARTER)
  // Dollar	$1 (ONE)
  // Five Dollars	$5 (FIVE)
  // Ten Dollars	$10 (TEN)
  // Twenty Dollars	$20 (TWENTY)
  // One-hundred Dollars	$100 (ONE HUNDRED)

  // Валютная единица	Количество
  // Пенни	0,01 доллара США (ПЕННИ)
  // никель	0,05 доллара США (НИКЕЛЬ)
  // Дайм	0,1 долл. США (копейки)
  // Четверть	0,25 доллара США (ЧЕТВЕРТЬ)
  // доллар	$1 (ОДИН)
  // Пять долларов	$5 (ПЯТЬ)
  // Десять долларов	10 долларов (ДЕСЯТЬ)
  // Двадцать долларов	20 долларов (ДВАДЦАТЬ)
  // Сто долларов	100 долларов (СТО)





// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90],
// ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// должен вернуться {status: "OPEN", change: [["QUARTER", 0.5]]}.
// Ожидание :checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25],
// ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// должен вернуться {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
// Ожидание :checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],
// ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// должен вернуться {status: "INSUFFICIENT_FUNDS", change: []}.
// Ожидание :checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1],
//  ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
//  должен вернуться {status: "INSUFFICIENT_FUNDS", change: []}.
// Ожидание :checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0],
// ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
// должен вернуться {status: "CLOSED", change: [["PENNY", 0.5],
// ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.