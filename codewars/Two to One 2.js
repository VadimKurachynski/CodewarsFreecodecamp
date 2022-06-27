
s1 = "xyaabbbccccdefww";
s2 = "xxxxxxxxxxxxxxxyyyyabklmopq";
let mySet = new Set(s1 + s2);
let str = "";

for (let char of mySet) {
  str += char;
}
console.log(str);