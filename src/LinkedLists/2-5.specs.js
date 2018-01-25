describe('function sumForwardOrBack, sums up the digits', () => {

  const LinkedList = function(data){
    this.value = data
    this.next = null
   }
  const a = new LinkedList(3)
  const b = new LinkedList(2)
  const c = new LinkedList(1)

  const d = new LinkedList(7)
  const e = new LinkedList(8)
  const f = new LinkedList(9)

  a.next = b
  b.next = c
  d.next = e
  e.next = f

  it('adds the numbers forward', () => {
    expect(sumForwardOrBackward(a, d, 'forward')).toEqual(1110)
  })
  it('adds the numbers backward', () => {
    a.value = 5
    b.value = 9
    c.value = 2
    d.value = 3
    e.value = 9
    f.value = 1
    expect(sumForwardOrBackward(a, d, 'backward')).toEqual(488)
  })
})
