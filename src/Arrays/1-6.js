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
/*
compresses consecutive same letters into 1 and adding the number of that letter after
loop through string and compare if same as previous letter
increment counter if same, otherwise add the letter and number of occurence
*/
