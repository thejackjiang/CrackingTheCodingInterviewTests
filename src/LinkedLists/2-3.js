const deleteMiddle = (node) => {
  while (node !== null && node.next !== null){
    node.value = node.next.value
    if (node.next.next === null) node.next = null
    node = node.next
  }
}
/*
removes a node somewhere in the middle of a linked list, only given access that node
we change the value of a node to its the next node's value for all the nodes after a specific node
this will simulate removing a node with only access to that node
*/
