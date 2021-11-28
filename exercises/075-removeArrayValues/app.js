function removeArrayValues(obj) {
    Object.keys(obj).forEach(function(key){
        if(Array.isArray(obj[key])){
            delete obj[key];
        }    
          console.log(obj);
    });
}