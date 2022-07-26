
function points(games) {
    let rr = games.reduce(function (total, item) {
        let arr = item.split(":");
        (arr[0] > arr[1]) ? total += 3 : total = total;
        (arr[0] < arr[1]) ? total += 0 : total = total;
        (arr[0] == arr[1]) ? total += 1 : total = total;
        return total;
    }, 0)
    return rr
}
console.log(points(['1:1', '2:2', '3:3', '4:4', '2:2', '3:3', '4:4', '3:3', '4:4', '4:4']))