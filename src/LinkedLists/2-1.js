const traverse = (head) => {
  let node = head
  const results = []
 while (node){
  results.push(node.value)
  node = node.next
 }
 return results
}

const removeDupe = (head) => {
  const results = {}
  node = head
  prev = null
  while (node){
    if (results[node.value]){
      prev.next = node.next
      node.next = null
      node = prev.next
    }
    else {
      results[node.value] = null
      prev = node
      node = node.next
    }
  }
  return results
}
