
function check(a, x) {
    f = false;
    for (let ch of a) {
        if (ch === x) f = true;
    }
    return f;
}



let arr = [3, 'er', 4, 'qq', 5, 12, 56, 67];
console.log(check(arr, 121));



