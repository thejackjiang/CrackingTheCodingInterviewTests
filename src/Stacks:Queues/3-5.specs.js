describe('implement a sort on the stack ', () => {

  const theStack = new sortStack()
  theStack.push(15)
  theStack.push(25)
  theStack.push(5)
  theStack.push(0)
  theStack.push(100)
  theStack.push(75)
  theStack.push(125)


  it('sorts the stack', () => {
    theStack.sort()
    expect(theStack.container).toEqual([0, 5, 15, 25, 75, 100, 125])
  })

})
