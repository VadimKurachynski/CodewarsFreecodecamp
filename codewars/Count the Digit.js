
function nbDig(n, d) {

    let x = "";
    for (let i = 0; i <= n; i++) {
        x += i ** 2;
    }
    return x.split("").reduce((sum, item) => {
        sum[item] = (sum[item] || 0) + 1;
        return sum
    }, {})[d]
}

console.log(nbDig(11549, 1))
