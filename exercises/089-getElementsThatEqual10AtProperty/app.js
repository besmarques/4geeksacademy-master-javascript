function getElementsThatEqual10AtProperty(obj, key){
    var arr = [];
var z = 0;

for(var i = 0; i < obj.key.length; i++){
	if(obj.key[i] > 10){
  	arr[z] = obj.key[i];
    z++;
  }
  
}
return arr;
}