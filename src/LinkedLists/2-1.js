const traverse = (head) => {
  let node = head
  const results = []
 while (node){
  results.push(node.value)
  node = node.next
 }
 return results
}
/*
traverse takes in a node and traverses from there till the end
used for testing
*/
const removeDupe = (head) => {
  const results = {}
  let node = head
  let prev = null
  while (node){
    if (results[node.value]){
      prev.next = node.next
      node.next = null
      node = prev.next
    }
    else {
      results[node.value] = true
      prev = node
      node = node.next
    }
  }
  return head
}

/*
cache nodes found before
if in cache, reassign pointers to remove node
*/
