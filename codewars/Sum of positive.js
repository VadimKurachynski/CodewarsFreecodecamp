
function positiveSum(arr) {

    return arr.reduce(function (sum, item) {
        if (item > 0) { sum += item }
        return sum;
    }, 0)

}
console.log(positiveSum([1, 2, 3, 4, 5], 2))