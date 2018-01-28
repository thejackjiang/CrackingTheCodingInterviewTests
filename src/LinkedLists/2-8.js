const loop = (node) => {
  let head = node
  let runner = node
  let check = false
  while (head){
    if (head.value === runner.value && check) {
      return head.next
    }
    if (!runner.next.next || !head.next) return false
    head = head.next
    runner = runner.next.next
    check = true
  }
}
