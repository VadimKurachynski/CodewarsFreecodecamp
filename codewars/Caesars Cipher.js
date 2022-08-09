
function rot13(str) {
    let ma = [];
    let mass = str.split("").map((item) => {
        if (item.toLowerCase() != item.toUpperCase()) {
            let code = item.charCodeAt() - 13
            if (code < 65) { code = 26 + code }
            ma.push(String.fromCharCode((code)));
        } else {
            ma.push(item);
        }
    })
    return ma.join("");
}


console.log(rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT."));//FREE CODE CAMP