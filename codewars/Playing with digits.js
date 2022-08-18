
function digPow(n, p) {
    let sum = 0;
    let mass = (String(n)).split("");
    for (let i = 0; i < mass.length; i++) {
        sum += Math.pow(Number(mass[i]), p + i);
    }
    return (sum % Number(n) == 0) ? sum / Number(n) : -1;

}
console.log(digPow(89, 1))