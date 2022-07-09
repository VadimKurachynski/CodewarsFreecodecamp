function highAndLow(numbers) {
    let Nmass = (numbers.split(" ")).map(Number);
    return Math.max(...Nmass) + " " + Math.min(...Nmass);
}

console.log(highAndLow("1 9 3 4 -5"));

