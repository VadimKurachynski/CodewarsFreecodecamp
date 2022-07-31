
function incrementString(strng) {
    let df = ""
    if (strng.length == 0) { return "1" };
    let bst = strng.match(/\d*$/);
    if (bst == "") { return strng + "1" };
    let k = bst[0].length;
    let st = String(parseInt(bst[0]) + 1);
    let kp = st.length;
    if (k > kp) {
        return strng.replace(/\d*$/, df = "0".repeat(Math.abs(k - kp)) + st);
    } else {
        return strng.replace(/\d*$/, st);
    }




}
console.log(incrementString("foobar0100"))





// Test.assertEquals(incrementString("foobar000"), "foobar001");
// Test.assertEquals(incrementString("foo"), "foo1");
// Test.assertEquals(incrementString("foobar001"), "foobar002");
// Test.assertEquals(incrementString("foobar99"), "foobar100");
// Test.assertEquals(incrementString("foobar099"), "foobar100");
// Test.assertEquals(incrementString(""), "1");
