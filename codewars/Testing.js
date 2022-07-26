
var number = function (array) {
    let r = [];
    for (i = 1; i <= array.length; i++) {
        r[i - 1] = `${i}: ` + array[i - 1];
    }
    return r
}
console.log(number(["a", "b", "c"]))