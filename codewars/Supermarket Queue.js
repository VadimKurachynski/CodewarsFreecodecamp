
function queueTime(customers, n) {
    let fs = [];
    for (k = 0; k < n; k++) { fs[k] = 0 }
    for (let i = 0; i < customers.length; i++) {
        min = fs.indexOf(Math.min(...fs));
        fs[min] += customers[i];
    }
    return Math.max(...fs)
}
console.log(queueTime([10, 2, 3, 3], 1))
