describe('addAy',function(){
  it("Will add 'ay' to the end of a word that starts with a vowel",function(){
    expect(addAy("open")).to.equal("openay");
  });
});

describe('pigLatin',function(){
  it("Will add first consecutive consonants to end of the word & add 'ay'",function(){
    expect(pigLatin("starbucks")).to.equal("arbucksstay");
  });
  it("Will add first consecutive consonants to end of the word & add 'ay'",function(){
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });
  it("Will detect words that start with vowels and return 'ay'",function(){
    expect(pigLatin("open")).to.equal("openay");
  });
});

describe('vowelDector',function(){
  it("Will add first consecutive consonants to end of the word & add 'ay'",function(){
    expect(vowelDector("a")).to.equal(true);
  });
});

//For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay". (If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
