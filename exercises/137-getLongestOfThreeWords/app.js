function getLongestOfThreeWords(word1, word2, word3) {
    if (word1 > word2){
        if(word1 > word3){
            return word1;
        }else {
            return word3;
        }
    }else if(word2 > word3){
        return word2;
    }else{
        return word3;
    }
}

var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'