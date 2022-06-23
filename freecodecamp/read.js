let num;
//num=5;


function readNumber() {

  do {
    num = 34;
  } while (!isFinite(num));

  if (num === null || num === '') return null;

  return +num;
}


console.log(`Число: ${readNumber()}`);
