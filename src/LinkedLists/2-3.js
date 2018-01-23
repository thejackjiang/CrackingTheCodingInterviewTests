const deleteMiddle = (node) => {
  while (node !== null && node.next !== null){
    node.value = node.next.value
    if (node.next.next === null) node.next = null
    node = node.next
  }
}
