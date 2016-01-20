$(document).ready(function() {
  $("form").submit(function(event) {
    var messageInput =$("input#pigLatin-input").val();
    var result = pigLatinSentence(messageInput);
    $("#result").text(result);
    $("#result").show();
    event.preventDefault();
  });
});

function pigLatinSentence (sentence){
  sentence = sentence.split(" ");
  // console.log(sentence);
  sentence.forEach(function(e){
    e = pigLatin(e);
    console.log(e);
    $('#result').append(e + ' ');
  });

}

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
  var arr = [];
  for (var i = 0; i< word.length; i++){
    // console.log(word[i]);
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
  for (var i = 0; i < arr.length; i++) {
    word.push(arr[i]);
    word.shift();
  }
  return addAy(word.join(''));
}
