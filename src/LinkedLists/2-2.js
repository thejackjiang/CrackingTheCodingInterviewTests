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

/*
finding the nth node from the end of a linked list
first we iterate one place holder the nth time
then we iterate the same place holder to the end as well as another place holder from the begining of the linkedlist at the same time
this will result in the place holder that started from the end having nth distance from the end
*/
