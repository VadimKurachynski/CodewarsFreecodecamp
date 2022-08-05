String.prototype.toAlternatingCase = function () {

    return this.split("").map((item) => {
        let arr = [];
        if (item.charCodeAt() >= 65 && item.charCodeAt() <= 95) { arr.push(item.toLowerCase()) }
        else if (item.charCodeAt() >= 97 && item.charCodeAt() <= 122) { arr.push(item.toUpperCase()) }
        else { arr.push(item) }
        return arr;
    }).join("");


}

console.log("HeLLo WoRLD".toAlternatingCase())