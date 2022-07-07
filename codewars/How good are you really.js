function betterThanAverage(classPoints, yourPoints) {
    classPoints.push(yourPoints);
    len = classPoints.length;
    const sr = classPoints.reduce((total, item) => {
        total += item;
        return total;
    });
    return (sr / len < yourPoints) ? true : false;
}
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));   //true