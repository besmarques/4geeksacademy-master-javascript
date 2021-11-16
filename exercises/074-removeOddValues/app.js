function removeOddValues(obj) {
    for(const property in obj){ 
        if(obj[property] % 2 != 0){
          delete obj[property];   
        }
      }  

}