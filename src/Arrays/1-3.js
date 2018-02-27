const spaces = (str, length) => {
  let res = ''
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' ' && res.length < length && res.length < length - 2 ){
      res += '%20'
    }
    else if (str[i] !== ' '){
      res += str[i]
    }
  }
  return res
}
/*
loop through the str and add anything that's not a space to the res string, if it is a space, then replace with %20
*/
