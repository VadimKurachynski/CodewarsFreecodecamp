
function x(n) {
  let mass = [];
  let massnew = [];
  let k = Math.floor(n / 2);
  for (let i = n; i > k; i--) {
    mass = "□".repeat(n).split("");
    mass.splice(n - i, 1, "■");
    mass.splice(-(n - i + 1), 1, "■");
    massnew.push(mass.join(""));
  }
  return [...massnew,...massnew.reverse().slice(1)].join("\n");
}
console.log(x(21));



