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
/*
checks if linked list is palindrome
goes through ll and stores in array
loop through array to check for palindrome
checks the ith element from each end of array
*/
