describe('function loop, check if a circular linkedlist', () => {

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


  it('checks if a and e intersect, they intersect at c', () => {
    expect(intersection(a, e)).toEqual(c)
  })
  it('checks if a and e intersect, they intersect at c', () => {
    a.value = 'c'
    b.value = 'a'
    c.value = 't'
    d.value = 'a'
    e.value = 'b'
    expect(intersection(a, e)).toEqual(c)
  })
})
