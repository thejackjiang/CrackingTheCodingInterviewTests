const isUnique = (str) => {
	const letterOccurance = new Array(128)
	letterOccurance.fill(0)
	for(let i = 0; i < str.length; i ++){
		letterOccurance[str.charCodeAt(i)]++
		if(letterOccurance[str.charCodeAt(i)] > 1) return false
	}
	return true
}

const isPermutation = (s, t) => {
  if(s.length !== t.length) return false
	const letterOccurance = new Array(128)
	letterOccurance.fill(0)
	for(let i = 0; i < s.length; i ++){
    letterOccurance[s.charCodeAt(i)] ++
  }
  for(let i = 0; i< t.length; i ++){
    letterOccurance[t.charCodeAt(i)]--
    if(letterOccurance[t.charCodeAt(i)] !== 0){
      return false
    }
  }
  return true
}
