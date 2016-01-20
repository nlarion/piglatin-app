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
  if (char.match(/[aeiouAEIOU]/)){
    return true;
  } else {
    return false;
  }
}

function addAy(word){
  if(vowelDector(word[0])){
    word = word.concat("ay");
    return word;
  }
}

function pigLatin(word){
  word = word.split("");
  var arr = [];
  for (var i = 0; i< word.length; i++){
    if(vowelDector(word[i])){
      break;
    } else {
      if(word[i]==='q' && word[i+1] === 'u'){
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
