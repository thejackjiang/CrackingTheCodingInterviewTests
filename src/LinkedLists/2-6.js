const palindrome = node => {
  let container = []
  while (node){
    container.push(node.value)
    node = node.next
  }
  for (let i = 0; i < container.length / 2; i++){
    if (container[i] !== container[container.length - i - 1]){
      return container[i] === container[container.length - i - 1]
    }
  }
  return true
}
