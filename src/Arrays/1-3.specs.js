describe('the function `spaces`,', () => {
  it('replaces spaces in the string with %20, Mr John Smith', function() {
    expect(spaces('Mr John Smith   ', 13)).toEqual('Mr%20John%20Smith');
    expect(spaces('Mr John Smith   ', 13).length).toEqual(17)
  });
  it('replaces spaces in the string with %20, I am batman', function() {
    expect(spaces('I am batman   ', 14)).toEqual('I%20am%20batman');
    expect(spaces('I am batman   ', 14).length).toEqual(15)
  });
  it('replaces spaces in the string with %20, even string of spaces', function() {
    expect(spaces('     ', 14)).toEqual('%20%20%20%20');
    expect(spaces('     ', 14).length).toEqual(12)
  });
});
