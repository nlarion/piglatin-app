describe('addAy',function(){
  it("Will add 'ay' to the end of a word that starts with a vowel",function(){
    expect(addAy("open")).to.equal("openay");
  });
});

describe('consAy',function(){
  it("Will add first consecutive consonants to end of the word & add 'ay'",function(){
    expect(consAy("starbucks")).to.equal("arbucksstay");
  });
});

describe('vowelDector',function(){
  it("Will add first consecutive consonants to end of the word & add 'ay'",function(){
    expect(vowelDector("a")).to.equal(true);
  });
});

//For words that start with one or more consonants, move all of the first consecutive consonants to the end and add "ay". (If the first consonants include "qu", move the "u" along with the "q". Don't forget about words like "squeal" where the "qu" doesn't come first!)
