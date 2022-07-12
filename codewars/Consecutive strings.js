function longestConsec(strarr, k) {
    let n = strarr.length;
    let rm = [];
    let arbig = [];
    if (n = 0 || k > n || k <= 0) { return "" };
    let big = 0;
    for (let i = 0; i < strarr.length - k + 1; i++) {
        rm = strarr[i];
        for (let d = 1; d < k; d++) {
            rm = rm + strarr[i + d];
        }
        if (rm.length > big) { big = rm.length; arbig = rm }
    }
    return arbig;
}
console.log(longestConsec(["it", "wkppv", "ixoyx", "3452", "zzzzzzzzzzzz"], 3));