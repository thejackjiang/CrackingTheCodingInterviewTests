describe('function removeDupes and traverse', () => {
  const LinkedList = function(data){
    this.value = data
    this.next = null
   }
   const a = new LinkedList('a')
   const b = new LinkedList('b')
   const b2 = new LinkedList('b')
   const c = new LinkedList('c')
   const d = new LinkedList('d')

   a.next = b
   b.next = b2
   b2.next = c
   c.next = d

   it('pushes values of linked list into results array', function (){
     expect(traverse(a)).toEqual(['a', 'b', 'b', 'c', 'd'])
   })
   it('removes duplicates in a linkedlist and returns object of unique values from linkedlist', () => {
     expect(traverse(removeDupe(a))).toEqual(['a', 'b', 'c', 'd'])
   })
})

