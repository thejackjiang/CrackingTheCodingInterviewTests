const permPal = (str) => {
  let occurence = {}
  let singleCount = 0
  for (let i = 0; i < str.length; i++){
    if (occurence[str[i]]) occurence[str[i]]++
    else occurence[str[i]] = 1
  }
  const values = Object.values(occurence)
  for (let i = 0; i < values.length; i++){
    if (values[i] % 2 === 1) singleCount++
    if (singleCount > 1) return false
  }
  return true
}

/*
checks if string is a permutation of a palindrome
loop through string and creates a hash - occurence
if that letter exist, increment, otherwise 1
check if there is more than 1 letter with odd occurence, then not permutation of palindrome
*/
