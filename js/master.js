function addAy(word){
  var vowels = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U'];
  for(var i = 0; i < vowels.length; i++){
    if(word.charAt(0).toString() == vowels[i].toString()){
      console.log("true");
      word = word.concat("ay");
      return word;
    }
  }
}
