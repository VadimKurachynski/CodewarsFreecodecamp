function fact(n) {
    
    if( n===1){
        return 1
    }else{
        return fact(n-1)*n;
    }
    return n;
  }
  
  
  
  console.log(fact(5));