function compress(str){
  let res = str[0]
  let count = 1
  for (let i = 1; i < str.length; i++){
    if (str[i] === str[i - 1]) {count++}
    else {
      res += count + str[i]
      count = 1
    }
  }
  return res + count
}
