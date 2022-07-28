function descendingOrder(n) {
    if (n == undefined) { return 0 }
    let r= String(n).split("").sort((a, b) => b - a).join("");
    return Number(r);


}

console.log(descendingOrder(111))
