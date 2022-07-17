
function sortArray(array) {

    let rs = [];
    for (let item of array) {
        if (item % 2) { rs.push(item) }
    }

    rs.sort(function (a, b) { return a - b; })

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) { rs.splice(i, 0, array[i]) }
    }

    return (rs)

}
console.log(sortArray([5, 3, 1, 8, 0]))



 // [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]