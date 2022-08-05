
function addTogether() {
    let g = arguments.length;
    x1 = arguments[0];
    x2 = arguments[1];
    if (typeof (x1) !== "number")
        return undefined;
    if (g === 1)
        return (x2) => addTogether(x1, x2);
    if (typeof (x2) !== "number")
        return undefined;
    return x1 + x2;
}

console.log(addTogether(2)(4));