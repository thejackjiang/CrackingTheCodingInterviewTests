describe('create queue with 2 stacks ', () => {

  const q = new QueueWithStacks()
   q.push(5)
   q.push(10)
   q.push(15)

  it('pushed in 3 things', () => {
    expect(q.flippedStack).toEqual([15, 10, 5])
  })
  it('can pop', () => {
    expect(q.pop()).toEqual(5)
    expect(q.flippedStack).toEqual([15, 10])
  })
  it('can peek', () => {
    expect(q.peek()).toEqual(10)
    expect(q.flippedStack).toEqual([15, 10])
  })
})
