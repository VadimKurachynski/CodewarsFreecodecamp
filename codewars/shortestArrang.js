
function shortestArrang(n) {
    let mass = [];
    for (let i = n - 1; i > 0; i--) {
        for (let j = i; j > 0; j--) {
            mass.push(j);
            if (mass.reduce((a, b) => a + b, 0) === n) return mass;
        }
        mass = [];
    }
    return [-1];
}


console.log(shortestArrang(57))