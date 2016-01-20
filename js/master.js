function vowelDector(char){
  var vowels = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U'];
  for(var i = 0; i < vowels.length; i++){
    if(char.charAt(0).toString() == vowels[i].toString()){
      return true;
    }
  }
  return false;
}

function addAy(word){
  if(vowelDector(word[0])){
    word = word.concat("ay");
    return word;
  }
}

function consDector(char) {
  var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
  for (var i = 0; i < consonants.length; i++) {
    if(char.charAt(0).toString() == consonants[i].toString()){
      return true;
    }
  }
}

function pigLatin(word){

  word = word.split("");
  //console.log(word);
  var arr = [];
  for (var i = 0; i< word.length; i++){
    console.log(word[i]);
    if(vowelDector(word[i])){
      break;
    }else if (consDector(word[i])){
      // console.log(word[i]);
      if(word[i].toString()==='q' && word[i+1].toString() === 'u'){
        arr.push(word[i],word[i+1]);
      }else{
        arr.push(word[i]);
      }
    }
  }
  //console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    word.push(arr[i]);
    word.shift();
  }
  // console.log(word);
  // console.log(addAy(word.join('')));
  return addAy(word.join(''));
  // return word.join('');
}
