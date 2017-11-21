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

describe('the function `spaces`,', () => {
  it('replaces spaces in the string with %20, Mr John Smith', function() {
    expect(spaces('Mr John Smith   ', 13)).toEqual('Mr%20John%20Smith');
    expect(spaces('Mr John Smith   ', 13).length).toEqual(17)
  });
  it('replaces spaces in the string with %20, I am batman', function() {
    expect(spaces('I am batman   ', 13)).toEqual('I%20am%20batman');
    expect(spaces('I am batman   ', 13).length).toEqual(15)
  });
  it('replaces spaces in the string with %20, even string of spaces', function() {
    expect(spaces('     ', 13)).toEqual('%20%20%20%20');
    expect(spaces('     ', 13).length).toEqual(12)
  });
});

describe('the function `permPal`,', () => {
  it('checks if a string is a permutation of a palindrome', function() {
    expect(permPal('svetlana my muse')).toEqual(false);
  })
  it('checks if a string is a permutation of a palindrome, even length', function() {
    expect(permPal('madam in eden im adam')).toEqual(true);
  })
  it('checks if a string is a permutation of a palindrome, odd length', function() {
    expect(permPal('yo banana boy')).toEqual(true);
  })
  it('checks if a string is a permutation of a palindrome, sorted', function() {
    expect(permPal('aaccott')).toEqual(true);
  })
});
