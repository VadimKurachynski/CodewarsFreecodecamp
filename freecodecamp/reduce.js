
const users = [
    { name: 'John', age: 34, six: "m" },
    { name: 'Amy', age: 20, six: "d" },
    { name: 'camperCat', age: 10, six: "m" }
];

const usersObj = users.reduce((obj, user) => {
    obj[user.name] = user.age;
    return obj;
}, {});

console.log(usersObj);