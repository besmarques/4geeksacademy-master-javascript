function findMinLengthOfThreeWords(word1,word2,word3){
    if(word2.length < word3.length ){
        if(word2.length < word1.length){
          return word2.length;
      }else{
          return word1.length;
      }
    }else{
        if(word3.length < word1.length){
          return word3.length;
      }else{
          return word1.length;
      }
    }
}