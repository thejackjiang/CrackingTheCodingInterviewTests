describe('function recursiveMult multiplies two numbers without * ', () => {

  it('2*3', function (){
    expect(recursiveMult(2, 3)).toEqual(6)
  })
  it('1*10', function (){
    expect(recursiveMult(1, 10)).toEqual(10)
  })
  it('2*0', function (){
    expect(recursiveMult(2, 0)).toEqual(0)
  })
})

