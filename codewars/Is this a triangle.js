function isTriangle(a, b, c) {
    return result = (a + b > c && a + c > b && b + c > a) ? true : false;
}

console.log(isTriangle(1, 2, 2));