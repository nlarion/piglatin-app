describe('addAy',function(){
  it("Will add 'ay' to the end of a word that starts with a vowel",function(){
    expect(addAy("open")).to.equal("openay");
  });
});
