
function spinalCase(str) {

    let strn = str.replace(/_/g, " ").replace(/(\S)([A-Z])/g, `$1 $2`)
        .replace(/-/g, " ").replace(/-/g, " ")
        .split(" ").join("-").toLowerCase();
    return strn;
}

console.log(spinalCase('The_Andy_Griffith_Show'))
  //spinalCase('This Is Spinal Tap');