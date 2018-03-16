const intersection = (node1, node2) => {
  const intersect = []
  let head1 = node1
  let head2 = node2
  while (head1){
    intersect.push(head1)
    head1 = head1.next
  }
  while (head2){
    if (intersect.includes(head2)) return head2
    head2 = head2.next
  }
  return false
}

/*
checks if 2 ll intersect
store ll 1 in an array
then loop through ll 2 and check if exist in array
*/
