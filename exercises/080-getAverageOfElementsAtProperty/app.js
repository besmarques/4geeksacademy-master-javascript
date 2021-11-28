function getAverageOfElementsAtProperty(obj, key){

var sum = 0;
var average = 0;

    Object.keys(obj).forEach(function(key){
        if(Array.isArray(obj[key])){
            if(obj[key].length != ""){
                for (var i = 0; i < obj[key].length;i++){
                    sum = sum + obj[key][i];
                    }
                average = sum / obj[key].length;
                
            } else {
                average = 0;
                }
        }
    });
    return average;
}