function sumArray(array) {
    if (array==null){return 0};
    if (array.length<=1){return 0};
    let minmax = Math.max(...array) + Math.min(...array);
    let summ = array.reduce((a, b) => a + b, 0) - minmax;
    return summ;
}
console.log(sumArray([  0, 1, 6, 10, 10  ]));