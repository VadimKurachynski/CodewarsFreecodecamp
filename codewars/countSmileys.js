
function countSmileys(arr) {
    if (arr.length == 0) { return 0 }
    let dl = arr.join("").match(/[:|;][-|~]?[\)|D]/g);
    if (dl != null) { return dl.length }
    return 0
}

console.log(countSmileys([':D', ':~)', ';~D', ':)']))

//console.log(countSmileys([";-(" , ":o)" ," :~>" , ";~>" , ";~>" , ":~(" , ":>"]))

    // Test.assertEquals(countSmileys([]), 0);
    // Test.assertEquals(countSmileys([':D',':~)',';~D',':)']), 4);
    // Test.assertEquals(countSmileys([':)',':(',':D',':O',':;']), 2);
    // Test.assertEquals(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);