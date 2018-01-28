describe('function loop, finds where the loop in the linked list is', () => {

  const LinkedList = function(data){
    this.value = data
    this.next = null
   }
  const a = new LinkedList('')
  const b = new LinkedList('')
  const c = new LinkedList('')
  const d = new LinkedList('')
  const e = new LinkedList('')

  a.next = b
  b.next = c
  c.next = d
  d.next = e
  e.next = b


  it('finds where the loop starts there is a loop in a linked list', () => {
    expect(loop(a)).toEqual(b)
  })
  it('finds where loop starts in fully cyclic linked list', () => {
    e.next = a
    expect(loop(a)).toEqual(a)
  })
})
