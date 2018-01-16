describe('the function compress', () => {
  it('checks if function returns compressed version of string',
function(){
  expect(compress('aabbbc')).toEqual('a2b3c1')
})
it('checks if function returns compressed version of string, same length',
function(){
  expect(compress('xxxyyyzzz')).toEqual('x3y3z3')
})
it('checks if function returns compressed version of string with caps',
function(){
  expect(compress('AAaBBBbbCCCc')).toEqual('A2a1B3b2C3c1')
})

})
