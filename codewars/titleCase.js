
function titleCase(title, minorWords) {
    let prim = "";
    if (title==""){
        return ""
    }
    if (arguments[1] != undefined) {
        prim = minorWords.toLowerCase().split(" ");
    }
    return text = title.toLowerCase().split(" ").map((item, id) => {
        if (!prim.includes(item) || id == 0) {
            item = item[0].toUpperCase() + item.slice(1)
        }
        return item
    }).join(" ")





}
console.log(titleCase(''))//A Clash of Kings