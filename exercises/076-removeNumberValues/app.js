var obj = {
    a: 2,
    b: 'remaining',
    c: 4
};
function removeNumberValues(obj) {
    Object.keys(obj).forEach(function(key){

        if(Number.isInteger(obj[key])){
            delete obj[key];
        }
        
          
          
          console.log(obj);
        });
}

removeNumberValues(obj);
console.log(obj); // --> { b: 'remaining' }