
function rgb(r, g, b){

 let strhex="";
  for (let i=0;i<3;i++){
   if(arguments[i]>255){arguments[i]=255}
   if(arguments[i]<0){arguments[i]=0}
    hexString= arguments[i].toString(16);
  if (hexString.length % 2) {
    hexString = '0' + hexString;
  }
  strhex+=hexString;
  }
return strhex.toUpperCase();
  }
  console.log(rgb(300,255,255))//'ADFF2F'