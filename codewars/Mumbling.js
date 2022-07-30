
function accum(s) {
    let mass = [];
    for (let i = 0; i < s.length; i++) {
        let a = s[i].repeat(i + 1).toLowerCase();
        mass.push(a[0].toUpperCase() + a.slice(1));
    }
    return mass.join("-");
}
console.log(accum("NyffsGeyylB"))