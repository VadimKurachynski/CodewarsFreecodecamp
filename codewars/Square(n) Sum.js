function squareSum(numbers) {
    if (numbers.length === 0) return 0;
    const sum = numbers.reduce((total, item) => {
        total += Math.pow(item, 2);
        return total;
    }, 0);
    return sum;
}

console.log(squareSum([0, 3, 4, 5]))