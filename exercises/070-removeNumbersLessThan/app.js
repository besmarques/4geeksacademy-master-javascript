var obj = {
    a: 8,
    b: 2,
    c: 'montana'
}
function removeNumbersLessThan(num, obj) {
    for(const property in obj){ 
        if(obj[property] < num){
          delete obj[property];   
        }
      }  
}
