describe('the function `isUnique`', () => {
  it('checks if the string has all unique characters, should be true', function() {
    expect(isUnique('abcdefg')).toEqual(true);
  });
  it('checks if the string has all unique characters, should be false', function() {
    expect(isUnique('aabbccddee')).toEqual(false);
  });
  it('checks if the string has all unique characters including caps, should be true', function() {
    expect(isUnique('AaBbCcDd')).toEqual(true);
  });
  it('checks if the string has all unique characters, including caps, should be false', function() {
    expect(isUnique('AAaaBBbbCCccDDdd')).toEqual(false);
  });
});
