function sumTwoSmallestNumbers(numbers) {
    let sr = numbers.sort((a, b) => a - b);
    return sr[0] + sr[1];
}
console.log(sumTwoSmallestNumbers([22, 8, 12, 19, 5]))