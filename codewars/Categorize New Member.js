

function openOrSenior(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        (data[i][0] >= 55 && data[i][1] >= 7) ? arr.push("Senior") : arr.push("Open");
    }
    return arr;
}
console.log(openOrSenior([[45, 12], [55, 21], [19, -2], [104, 20]]))  //['Open', 'Senior', 'Open', 'Senior'])