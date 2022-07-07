function abbrevName(name) {
    d = name.split(" ")
    return d[0].slice(0, 1).toUpperCase()+"."+d[1].slice(0, 1).toUpperCase();
}
console.log(abbrevName("Sam Harris"))