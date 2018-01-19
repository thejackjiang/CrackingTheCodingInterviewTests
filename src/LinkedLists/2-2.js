const fromEnd = (num, node) => {
  let first = node
  let second = node
  for (let i = 0; i < num; i++){
    second = second.next
  }
  while (second.next){
    first = first.next
    second = second.next
  }
  return first.data
}

