describe('the function `isPermutation`', () => {
  it('checks if two strings are permutations of each other', function() {
    expect(isPermutation('abcdefg', 'gfedcba')).toEqual(true);
  });
  it('checks if two strings are permutations of each other', function() {
    expect(isPermutation('abcdefg', 'qwertyu')).toEqual(false);
  });
  it('checks if two strings are permutations of each other', function() {
    expect(isPermutation('abcdefg', 'xyz')).toEqual(false);
  });
  it('checks if two strings are permutations of each other, accounting for caps', function() {
    expect(isPermutation('AbCd', 'aBcD')).toEqual(false);
  });
  it('checks if two strings are permutations of each other, accounting for caps', function() {
    expect(isPermutation('AbCd', 'aBcD')).toEqual(false);
  });
});
