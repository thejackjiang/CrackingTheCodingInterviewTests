describe('function intersection, checks if two linked list intersect and return the node', () => {

  const LinkedList = function(data){
    this.value = data
    this.next = null
   }
  const a = new LinkedList('p')
  const b = new LinkedList('a')
  const c = new LinkedList('y')
  const d = new LinkedList('a')
  const e = new LinkedList('d')

  a.next = b
  b.next = c

  e.next = d
  d.next = c


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
