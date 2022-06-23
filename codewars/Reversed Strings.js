function solution(str) {

    let newstr = "";
    for (let i = str.length; i > 0; i--) {
        newstr += str[i - 1];
    }
    return newstr;
}

let st = solution('privet');

console.log(st);