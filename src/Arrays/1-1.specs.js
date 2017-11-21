describe('the function `isUnique`', () => {
  it('checks if the string has all unique characters', function() {
    expect(isUnique('abcdefg')).toEqual(true);
  });
  it('checks if the string has all unique characters', function() {
    expect(isUnique('aabbccddee')).toEqual(false);
  });
  it('checks if the string has all unique characters including caps', function() {
    expect(isUnique('AaBbCcDd')).toEqual(true);
  });
  it('checks if the string has all unique characters, including caps', function() {
    expect(isUnique('AAaaBBbbCCccDDdd')).toEqual(false);
  });
});
