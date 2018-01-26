describe('function palindrome, checks if a linkedlist is a palindrome', () => {

  const LinkedList = function(data){
    this.value = data
    this.next = null
   }
  const a = new LinkedList('k')
  const b = new LinkedList('a')
  const c = new LinkedList('y')
  const d = new LinkedList('a')
  const e = new LinkedList('k')

  a.next = b
  b.next = c
  c.next = d
  d.next = e


  it('checks if kayak is palindrome', () => {
    expect(palindrome(a)).toEqual(true)
  })
  it('checks if qwerty is palindrome', () => {
    a.value = 'q'
    b.value = 'w'
    c.value = 'e'
    d.value = 'r'
    e.value = 't'
    expect(palindrome(a)).toEqual(false)
  })
})
