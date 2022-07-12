function invert(array) {

//let invarray=array.map(function(item){ return item=-item;});
return array.map((item) => -item);
}

 console.log(invert([1,2,3,4,5]));