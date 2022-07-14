function count(string) {
    const charact = string.split("").reduce(function (total, item) {
        total[item] = (total[item] || 0) + 1;
        return total;
    }, {})
    return charact;
}
console.log(count("aba"))