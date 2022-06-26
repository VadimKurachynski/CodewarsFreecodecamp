
let arr1 = [1, 2, 3, 4, 5, 7, 123, 45, 56, 34, 24, 89, 300, 67, 45, 40, 87, 3];
let arr2 = ['ee', 'rr', 'tt', 'Uu', 'aa', 'Ff', 'ss', 'dd', 'bb'];

let mass = arr2.sort(function (a, b) {
    let A = a.toLowerCase();
    let B = b.toLowerCase();
    if (A < B) return -1;
    if (A > B) return 1;
    if (A = B) return 0;

});

let emp = [];
emp[0] = { name: "George", age: 32, retiredate: "March 12, 2014" }
emp[1] = { name: "Edward", age: 17, retiredate: "June 2, 2023" }
emp[2] = { name: "Christine", age: 58, retiredate: "December 20, 2036" }
emp[3] = { name: "Sarah", age: 62, retiredate: "April 30, 2020" }

let massDate = emp.sort(function (a, b) {
    let dateA = new Date(a.retiredate);
    let dateB = new Date(b.retiredate);
    return dateA - dateB;
})
console.log(massDate);

emp.sort(function (a, b) {
    let nameA = a.name.toLowerCase();
    let nameB = b.name.toLowerCase();
    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    if (nameA = nameB) return 0;

}
);
console.log(emp);

//console.log(arr1);
//console.log(emp);
//console.log(mass);
// function sortfunction(a, b){
//    return(a-b)
//     }
// let sortfunction = (a, b) => a-b;
// let sortfunction=function(a,b){return a-b}
//arr1.sort(function () { return 0.5 - Math.random() });