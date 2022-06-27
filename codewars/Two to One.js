function longest(s1, s2) {
  let fin = "";
  let arren = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
    'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p',
    'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let s3 = s1 + s2;
  for (let char of arren) {
    for (let char2 of s3) {
      if (char == char2) {
        fin += char;
        break;
      }
    }
  }
  return fin;
}
s1 = "xyaabbbccccdefww";
s2 = "xxxxyyyyabklmopq";
console.log(longest(s1, s2))