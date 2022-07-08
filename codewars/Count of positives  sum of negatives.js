function countPositivesSumNegatives(input) {
    let sum = 0;
    let kol = 0;
    if (input == null) { return [] };
    if (input.length == 0) { return [] };
    for (let char of input) {
        (char > 0) ? kol += 1 : sum += char;
    }
    return [kol, sum];
}

console.log(countPositivesSumNegatives(null))