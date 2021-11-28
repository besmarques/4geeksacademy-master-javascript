function removeStringValues(obj) {
    Object.keys(obj).forEach(function(key){

        if(typeof(obj[key]) == "string"){
             delete obj[key];
        }
        
        //console.log(obj);
        });
    return obj;
}

removeStringValues(obj);
console.log(obj); // { age: 20 }