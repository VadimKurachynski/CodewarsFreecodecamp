function makeNegative(num) {
    if(Math.sign(num)===1)num=-num;
    return num;
  }
  console.log(makeNegative(5));