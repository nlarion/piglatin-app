function vowelDector(char){
  var vowels = ['a','e','i','o','u','A', 'E', 'I', 'O', 'U'];
  for(var i = 0; i < vowels.length; i++){
    if(char.charAt(0).toString() == vowels[i].toString()){
      //console.log("true");
      return true;
    }
  }
  return false;
}

function addAy(word){
  if(vowelDector(word[0])){
    //console.log("true");
    word = word.concat("ay");
    return word;
  }
}

function consAy(word){
var consonants = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y','z','B','C','D','F','G','H','J','K','L','M','N','P','Q','R','S','T','V','W','X','Y','Z'];
  word = word.split("");
  //console.log(word);
  var arr = [];
  for (var i = 0; i< word.length; i++){
    //console.log(word[i]);
    if(vowelDector(word[i])){
      //do something
      break;
    }else{
      for (var j = 0; j < consonants.length; j++){
        if(word[i]===consonants[j]){
          console.log(word[i]);
          if(word[i].toString()==='q' && word[i+1].toString() === 'u'){
            console.log("we got a match: "+consonants[j]);
            arr.push(word[i],word[i+1]);
          }else{
            console.log("we got a match: "+consonants[j]);
            arr.push(word[i]);
          }

        }
      }
    }
  }
  //console.log(arr);
  for (var i = 0; i < arr.length; i++) {
    word.push(arr[i]);
    word.shift();
  }
  console.log(word);
  console.log(addAy(word.join('')));
  return addAy(word.join(''));
}
