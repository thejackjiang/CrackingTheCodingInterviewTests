describe('function partition, partitions a linkedlist based on a number. ', () => {

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
  const a = new LinkedList(1)
  const b = new LinkedList(5)
  const c = new LinkedList(3)
  const d = new LinkedList(8)

  a.next = b
  b.next = c
  c.next = d

  it('partitions the nodes 1 -> 3 -> 5 -> 8 by the number 5', () => {
    expect(traverse(partition(a, 5))).toEqual([1, 3, 5, 8])
  })
})
