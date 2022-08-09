
function arraysSimilar(arr1, arr2) {
    if (arr1.length != arr2.length) {
        return false
    }
    arr1.sort(function (a, b) { return a - b });
    arr2.sort(function (a, b) { return a - b });
    for (let i = 0; i < arr1.length; i++) {
        if (typeof arr1[i] != typeof arr2[i]) { return false }
        if (arr1[i] != arr2[i]) { return false }

    }
    return true
}

const arr1 = [1, 2, 2, 3, 4],
    arr2 = [2, 1, 2, 4, 3],
    arr3 = [1, 2, 3, 4],
    arr4 = [1, 2, 3, "4"]




console.log(arraysSimilar(arr1, arr2))