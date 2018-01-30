describe('threeInOne which has an array that has 3 stacks in it', () => {

  const stack = new threeInOne()
  stack.push1(10)
  stack.push1(15)
  stack.push2(50)
  stack.push2(55)
  stack.push3(100)
  stack.push3(105)


  it('pushed in 6 things', () => {
    expect(stack.array).toEqual([ 10, 15, 50, 55, 100, 105 ])
  })
  it('can check min for first stack', () => {
    expect(stack.firstMin).toEqual(10)
  })
  it('can check min for second stack', () => {
    expect(stack.secondMin).toEqual(50)
  })
  it('can check min for third stack', () => {
    expect(stack.lastMin).toEqual(100)
  })
  it('can peek first stack', () => {
    expect(stack.peek1()).toEqual(15)
  })
  it('can peek second stack', () => {
    expect(stack.peek2()).toEqual(55)
  })
  it('can peek third stack', () => {
    expect(stack.peek3()).toEqual(105)
  })
  it('can pop first stack', () => {
    expect(stack.pop1()).toEqual(15)
  })
  it('can pop second stack', () => {
    expect(stack.pop2()).toEqual(55)
  })
  it('can pop third stack', () => {
    expect(stack.pop3()).toEqual(105)
  })
  it('popped 3 things, 3 things left', () => {
    expect(stack.array).toEqual([ 10, 50, 100 ])
  })

})
