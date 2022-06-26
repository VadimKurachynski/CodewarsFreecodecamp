//LESSON
const cities = [
    { name: 'Moscow', population: 12506468 },
    { name: 'Saint Petersburg', population: 5351935 },
    { name: 'Novosibirsk', population: 1612833 },
    { name: 'Kaliningrad', population: 482443 },
    { name: 'Kaluga', population: 336726 }
];

// const millionPlusCities = cities.filter(function (e) {
//     return e.population > 1000000;
//   });
//   console.log(millionPlusCities);

//   var millionPlusCities = cities.filter(e => e.population > 1000000);
// console.log(millionPlusCities);



cities.filter(function (e) {
    return e.population < 1000000;
}).sort(function (a, b) {
    return b.population - a.population;
}).map(function (e) {
    //console.log(e.name + ': ' + e.population);
});


// cities.filter(e => e.population < 1000000)
//   .sort((a, b) => (b.population - a.population))
//   .map(e => console.log(e.name + ': ' + e.population));



const girls = ['Alena', 'Malena', 'Milena', 'Asya', 'Kasya'];
const filterValues = (name) => {
    return girls.filter(data => {
        return data.toLowerCase().indexOf(name.toLowerCase()) > -1;
    });
}
//console.log(filterValues('le'));
const arrN = ['Alena', 'Malena', 'Milena', 'Asya', 'Kasya'];
arrN.filter(function (name) {
    return name.indexOf("Ma");
})
console.log(arrN)