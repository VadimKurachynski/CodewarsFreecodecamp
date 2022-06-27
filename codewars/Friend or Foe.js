
function friend(friends) {
  let arrFriends = [];
  for (let char of friends) {
    console.log(char.length);
    if (char.length == 4) arrFriends.push(char);
  }
  return arrFriends;
}
let arr = ["Ryan", "Kieran", "Jason", "Yous"];

console.log(friend(arr));
