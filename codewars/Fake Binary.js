

x = "234346545756856454";
let newstr = "";
for (let char of x) {
    if (char < 5) {
        newstr = newstr + "0";
    } else {
        newstr = newstr + "1";
    }
}
console.log(newstr);