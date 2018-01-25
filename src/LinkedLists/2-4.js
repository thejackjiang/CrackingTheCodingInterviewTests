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
