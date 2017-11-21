// const isUnique = (str) => {
// 	const letterOccurance = new Array(128)
// 	letterOccurance.fill(0)
// 	for(let i = 0; i < str.length; i ++){
// 		letterOccurance[str.charCodeAt(i)]++
// 		if(letterOccurance[str.charCodeAt(i)] > 1) return false
// 	}
// 	return true
// }

const isUnique = (str) => {
	const letterOccurance = {}
	for (let i = 0; i < str.length; i++){
		if (letterOccurance[str.charCodeAt(i)]) letterOccurance[str.charCodeAt(i)] = false
		else letterOccurance[str.charCodeAt(i)] = true
	}
	return !(Object.values(letterOccurance).some(el => {
		return el === false
    }))

}
// const isPermutation = (s, t) => {
// 	if(s.length !== t.length) return false
// 	const letterOccurance = new Array(128)
// 	letterOccurance.fill(0)
// 	for(let i = 0; i < s.length; i ++){
//     letterOccurance[s.charCodeAt(i)] ++
//   }
// 	for(let i = 0; i< t.length; i ++){
//     	letterOccurance[t.charCodeAt(i)]--
//     	if(letterOccurance[t.charCodeAt(i)] !== 0){
//     		return false
//     }
//   }
//   return true
// }

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
  return !(Object.values(letterOccurance).some(el => {
    return el !== 0
  }))
}

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
