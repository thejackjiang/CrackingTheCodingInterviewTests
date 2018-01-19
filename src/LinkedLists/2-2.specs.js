describe('function fromEnd, returns kth ndoe from the end', () => {

  const ll = function(data){
    this.data = data
    this.next = null
  }

  const a = new ll('a')
  const b = new ll('b')
  const c = new ll('c')
  const d = new ll('d')

  a.next = b
  b.next = c
  c.next = d

  it('returns the second to last node in linkedlist', () => {
    expect(fromEnd(2, a)).toEqual('b')
  })
  it('returns the third to last node in linkedlist', () => {
    expect(fromEnd(3, a)).toEqual('a')
  })
})
