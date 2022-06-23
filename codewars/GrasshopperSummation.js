
var summation = function (num) {
    if (num === 1) {
        return 1;
    } else {
        return num + summation(num - 1)
    }
}

console.log(summation(3));