function getElementsLessThan100AtProperty(obj, key){
    var arr = [];
    var z = 0;
    
    for(var i = 0; i < obj.key.length; i++){
        if(obj.key[i] < 100){
          arr[z] = obj.key[i];
        z++;
      }
      
    }
    return arr;
}