describe('stack has a limit, once stack has reached the limit, will form new stack ', () => {

  const mystack = new stack()
  mystack.push(0)
  mystack.push(1)
  mystack.push(2)
  mystack.push(3)
  mystack.push(4)
  mystack.push(5)
  mystack.push(6)


  it('pushed in 7 things', () => {
    expect(mystack.array).toEqual([[0, 1, 2, 3, 4], [5, 6] ])
  })
  it('can pop', () => {
    expect(mystack.pop()).toEqual(6)
  })
  it('can pop', () => {
    expect(mystack.pop()).toEqual(5)
  })
  it('can pop even if it empties out the newest stack', () => {
    mystack.pop()
    expect(mystack.array).toEqual([[0, 1, 2, 3]])
  })
  it('can pop specific index', () => {
    expect(mystack.popIndex(2)).toEqual(2)
    expect(mystack.array).toEqual([[0, 1, 3]])
  })

})
