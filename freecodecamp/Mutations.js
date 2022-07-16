
function mutation(arr) {
    let a1 = arr[0].toLowerCase();
    let a2 = arr[1].toLowerCase();
    let sum = 0;
    for (let s of a2) {
        if (a1.indexOf(s) != -1) { console.log(s); sum += 1; console.log(sum); };
        if (sum == a2.length) { return true }
    }
    return false;
}

//mutation(["hello", "hey"]);
console.log(mutation(["hello", "Hello"]))