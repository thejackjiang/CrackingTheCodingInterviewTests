const isPermutation = (s, t) => {
  if (s.length !== t.length) return false
  const letterOccurance = {}
  for (let i = 0; i < s.length; i++){
    if (letterOccurance[s.charCodeAt(i)]) letterOccurance[s.charCodeAt(i)]++
    else letterOccurance[s.charCodeAt(i)] = 1
  }
  for (let i = 0; i < t.length; i++){
    if (!letterOccurance[t.charCodeAt(i)]) return false
    if (letterOccurance[t.charCodeAt(i)]) letterOccurance[t.charCodeAt(i)]--
  }
  return (Object.values(letterOccurance).some(el => {
    return el === 0
  }))
}

/*
if the lengths aren't the same, return false
cache each letter into an object for each string, one string will increment the counter for each letter while the other decrements
if there are any non 0's in the object at the end, it is not a permutation
*/
