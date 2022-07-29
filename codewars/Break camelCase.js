
function solution(string) {
    if (string == "") { return "" }
    let ma = string.match(/[A-Z]/g);
    if (ma == null) { return string }
    let index = 0;
    let u = "";
    for (i = 0; i < ma.length; i++) {
        u = string.indexOf(ma[i], index);
        if (string[u - 1] != " ") {
            string = string.slice(0, u) + " " + ma[i] + string.slice(u + 1)
        }
        index = u + 2;
    }
    return string;
}
console.log(solution("womanSeemSeeAble"))