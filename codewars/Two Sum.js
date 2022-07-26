
function twoSum(numbers, target) {

    for (let i = 0; i < numbers.length; i++) {
        let gt = numbers.lastIndexOf(target - numbers[i]);
        if (gt != -1 && gt != i) { return [i, gt] }
    }
}

console.log(twoSum([1, 2, 3], 4))

  //twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]