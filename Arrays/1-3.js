const spaces = (str, length) => {
  let res = ''
  for (let i = 0; i < str.length; i++){
    if (str[i] === ' ' && res.length < length && res.length < length - 1 ){
      res += '%20'
    }
    else if (str[i] !== ' '){
      res += str[i]
    }
  }
  return res
}
