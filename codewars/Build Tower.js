
function towerBuilder(nFloors) {
    let arr = [];
    let k = 0;
    for (let i = nFloors * 2 - 1; i >= 1; i -= 2) {
        arr.push(" ".repeat(k) + "*".repeat(i) + " ".repeat(k))
        k += 1;
    }
    return arr.reverse()
}

console.log(towerBuilder(6))