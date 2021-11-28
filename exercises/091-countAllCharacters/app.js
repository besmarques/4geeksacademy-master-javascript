function countAllCharacters(str){
    var arr = {} ;
    
    for (var i = 0; i < str.length; i++){
        arr[str.charAt(i)] = str.split(str[i]).length - 1;
    }
    
    return arr;
}




