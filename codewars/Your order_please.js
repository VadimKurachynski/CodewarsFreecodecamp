
function order(words) {
    if (words == "") { return "" }
    let str = words.split(" ");
    let sk = [];
    sk.length = str.length;
    for (let i = 0; i < str.length; i++) {
        zn = Number(str[i].match(/\d/g));
        sk.splice(zn, 1, str[i])
    }
    return sk.join(" ");
}
console.log(order("is2 Thi1s T4est 3a"))

