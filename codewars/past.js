
function past(h, m, s) {
  return (s * 1000 + m * 60000 + h * 3600000)
}
console.log(past(1, 1, 1))