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



function lookUpProfile(name, prop) {

  let has = (contacts.some(it => it.firstName === name));
  if (has === false){return("No such contact")}
  
  
  let find1 = contacts.filter(f1 => f1.firstName == [name]);
  if (("lastName" in find1) === false){
  console.log(find1);
    return("No such property");
    }
  
    
  
  
  let find = contacts.filter(f => f.firstName == [name]).map(f=>f[prop]);
  if (prop==="lastName"){return (find.join(""));}
  if (prop==="likes"){return (find.flat());}
  
  
  }
  
  
  
  console.log( lookUpProfile("Kristian", "lastName"));