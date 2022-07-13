function filter_list(l) {
    let n = [];
    for (let item of l)
        (typeof (item) === "number") ? n.push(item) : "";
    return n;
}
console.log(filter_list([1, 2, 'aasf', '1', '123', 123]))