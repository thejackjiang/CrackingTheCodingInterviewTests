/*
loop through string and cache letters in an object
if it exist in the object, return false
 */
const isUnique = (str) => {
	const letterOccurance = {}
	for (let i = 0; i < str.length; i++){
		if (letterOccurance[str.charCodeAt(i)]) return false
		letterOccurance[str.charCodeAt(i)] = true
	}
	return !(Object.values(letterOccurance).some(el => {
		return el === false
    }))
}
