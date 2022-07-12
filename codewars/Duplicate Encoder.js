function duplicateEncode(word) {
    let arr = word.toLowerCase();
    let newStr = "";
    for (i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) != arr.lastIndexOf(arr[i])) {
            newStr = newStr.concat(")");
        } else newStr = newStr.concat("(")
    }
    return newStr;
}
console.log(duplicateEncode("recede"));