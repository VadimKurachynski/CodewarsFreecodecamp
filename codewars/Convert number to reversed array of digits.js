
function digitize(n) {
    
    return String(n).split("").reverse().map((item)=>parseInt(item))
    
    
}

console.log(digitize(35231))