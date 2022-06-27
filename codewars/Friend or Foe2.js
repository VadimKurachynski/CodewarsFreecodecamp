
function friend(friends) {
  return friends.filter(n => n.length === 5)
}
let arr = ["Ryan", "Kieran", "Jason", "Yous"];

console.log(friend(arr));
