
function findOdd(A) {

    let obj = A.reduce(function (sum, item, id) {
        if (!sum[item]) {
            sum[item] = 1;
        } else {
            sum[item] = sum[item] + 1;
        }
        return sum;
    }, {})

    for (let key in obj) {
        if (obj[key] % 2 != 0) { return Number(key) }
    }
}
console.log(findOdd([7]));