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
