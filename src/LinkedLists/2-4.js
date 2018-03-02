const partition = (head, num) => {
  let node = head
  let left, rightHead, leftCurr, rightCurr
  while (node){
    if (node.value >= num){
      if (!rightCurr){
        rightHead = node
        rightCurr = rightHead
      }
      else {
        rightHead.next = node
        rightCurr = rightCurr.next
      }
    }
    else  if (!leftCurr){
        leftHead = node
        leftCurr = leftHead
      }
      else {
        leftHead.next = node
        leftCurr = leftCurr.next
      }
    node = node.next
  }
  leftCurr.next = rightHead
  rightCurr.next = null
  return leftHead
}
/*
creates 2 linked list based on a partition number
traverse through a linked list and compare the value to the partition number
sort the linked list into 2 linked list based on partition number
then join the two linked list at the end
*/
