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

describe('the function `isPermutation`', () => {
  it('checks if two strings are permutations of each other, should be true', function() {
    expect(isPermutation('abcdefg', 'gfedcba')).toEqual(true);
  });
  it('checks if two strings are permutations of each other, should be false', function() {
    expect(isPermutation('abcdefg', 'qwertyu')).toEqual(false);
  });
  it('checks if two strings are permutations of each other, should be false', function() {
    expect(isPermutation('abcdefg', 'xyz')).toEqual(false);
  });
  it('checks if two strings are permutations of each other, accounting for caps, should be false', function() {
    expect(isPermutation('AbCd', 'aBcD')).toEqual(false);
  });
  it('checks if two strings are permutations of each other, accounting for caps, should be false', function() {
    expect(isPermutation('AbCd', 'aBcD')).toEqual(false);
  });

});
