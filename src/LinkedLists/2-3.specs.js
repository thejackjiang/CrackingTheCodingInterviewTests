describe('function deleteMiddle, deletes a node in the middle of a singely linked list(not necessarily right in the middle) with only acess to that node', () => {

  const LinkedList = function(data){
    this.value = data
    this.next = null
   }

   const traverse = (head) => {
       let node = head
       const results = []
      while (node){
       results.push(node.value)
       node = node.next
      }
      return results
     }
    const a = new LinkedList('a')
    const b = new LinkedList('b')
    const c = new LinkedList('c')
    const d = new LinkedList('d')

    a.next = b
    b.next = c
    c.next = d

  it('removes the c node', () => {
    deleteMiddle(c)
    expect(traverse(a)).toEqual(['a', 'b', 'd'])
  })
  it('removes the b node', () => {
    deleteMiddle(b)
    expect(traverse(a)).toEqual(['a', 'd'])
  })
})
