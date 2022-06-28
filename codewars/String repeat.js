function repeatStr(n, s) {
    let st = "";
    for (i = 1; i <= n; i++) {
        st += s;
    }
    return st;
}
console.log(repeatStr(2, "Привет"));