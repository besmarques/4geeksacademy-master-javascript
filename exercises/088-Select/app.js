function select(arr, obj){
var newObj = new Object();    
for (var i = 0; i < arr.length; i++){
    if (arr[i] in obj){
        
        newObj[arr[i]] = obj[arr[i]];
    }
}
//console.log(newObj);
return newObj;
}