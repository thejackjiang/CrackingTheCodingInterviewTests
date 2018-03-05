const sumForwardOrBackward = function(node1, node2, orientation){
  if (orientation !== 'forward' && orientation !== 'backward') return false
  let head1 = node1
  let head2 = node2
  let num1 = ''
  let num2 = ''
  while (node1){
    if (orientation === 'forward') num1 += node1.value
    else if (orientation === 'backward') num1 = node1.value + num1
    node1 = node1.next
  }
  while (node2){
    if (orientation === 'forward') num2 = num2 + node2.value
    else if (orientation === 'backward') num2 = node2.value + num2
    node2 = node2.next
  }
  return +num1 + +num2
}
/*
sums up the digits of 2 linked lists based on orientation
use 2 loops to create the number from the values of the 2 linked list
convert to numbers and add together
*/
