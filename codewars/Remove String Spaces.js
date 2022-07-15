function noSpace(x) {
    let str = ""
    for (item of x) {
        if (item != " ") { str += item }
    }
    return str;

}
console.log(noSpace('8 j 8   mBliB58g  imj5B85B8  jl5 5 B'))