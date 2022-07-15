function findLongestWordLength(str) {
   
    const sum = str.split(" ").reduce(function (s, item) {
     if(item.length>s) s=item.length;
        return s;
    }, 0)
    return sum;
}
console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));
