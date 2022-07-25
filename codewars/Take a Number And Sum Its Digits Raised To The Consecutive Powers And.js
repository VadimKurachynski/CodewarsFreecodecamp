function sumDigPow(a, b) {
    let arr = [];
    for (let i = a; i <= b; i++) {
        kolv = Number(i.toString(10).length)
        let sum = 0;
        for (let k = 0; k < kolv; k++) {
            let sf = Number(i.toString()[k]);
            sum = sum + Math.pow(sf, k + 1);
        }
        if (sum == i) { arr.push(sum); }
    }
    return arr;
}
console.log(sumDigPow(90, 150))
