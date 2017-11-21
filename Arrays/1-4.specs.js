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
