
String.prototype.toJadenCase = function () {
    let h = this.split(" ");
    return h.map((item) => item[0].toUpperCase() + item.slice(1)).join(" ");
};
let str = "How can mirrors be real if our eyes aren't real";
console.log(str.toJadenCase())




