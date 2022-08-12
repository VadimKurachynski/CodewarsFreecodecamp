
function findUniqaz(arr) {

    let arrn = arr.join("").toLowerCase().split("");
    let ee = arrn.reduce(function (total, item) {
        total[item] = (total[item] || 0) + 1;
        return total;
    }, {})
    let mass = [];let mass1 = [];
    for (key in ee) {
        mass.push(ee[key]);
        mass1.push(key);
    }
    for (let item of arr) {
        sd=mass1[mass.indexOf(Math.min(...mass))];
       if((item.split("").includes(sd))||(item.split("").includes(sd.toUpperCase()))) { return item }
    }
}

console.log(findUniqaz([ '    ', 'a', ' ' ]))
