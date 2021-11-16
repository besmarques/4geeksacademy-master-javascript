function removeStringValuesLongerThan(num, obj) {
    // your code here
    for(const property in obj){ 
        if(obj[property].length > num){
          delete obj[property];   
        }
      }  
}
