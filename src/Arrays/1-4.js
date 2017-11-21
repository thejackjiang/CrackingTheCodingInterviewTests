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
