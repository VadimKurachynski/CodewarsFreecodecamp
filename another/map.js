const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];



const firstName = contacts.map(wer => wer.lastName +" "+ wer.firstName);






// lookUpProfile("Kristian", "lastName")должен вернуть строкуVos
// Ожидание :lookUpProfile("Sherlock", "likes")должен вернуться["Intriguing Cases", "Violin"]
// Ожидание :lookUpProfile("Harry", "likes")должен вернуть массив
// Ожидание :lookUpProfile("Bob", "number")должен вернуть строкуNo such contact
// Ожидание :lookUpProfile("Bob", "potato")должен вернуть строкуNo such contact
// Ожидание :lookUpProfile("Akira", "address")должен вернуть строкуNo such property