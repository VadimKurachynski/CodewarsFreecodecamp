function deleteNth(arr, n) {
    let r = [];
    var num = arr.reduce(function (sum, el) {
        sum[el] = (sum[el] || 0) + 1;
        return sum;
    }, {});
    for (let key in num) {
        if (num[key] > n) {
            for (let j = 1; j <= num[key] - n; j++) {
                let pos = arr.lastIndexOf(Number(key));
                arr.splice(pos, 1);
            }
        }
    }
    return arr;
}
console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 2))


// второй вариант - не мой
function deleteNth2(arr, x) {
    var cache = {};
    return arr.filter(function (n) {
        cache[n] = (cache[n] || 0) + 1;
        return cache[n] <= x;

    });
}

console.log(deleteNth2([1, 1, 3, 3, 7, 2, 2, 2, 2], 3))