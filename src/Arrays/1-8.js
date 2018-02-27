function tMatrix(arr){
  let iZero = []
  let jZero = []
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      if (arr[i][j] === 0){
        iZero.push(i)
        jZero.push(j)
      }
    }
  }
  for (let i = 0; i < iZero.length; i++){
    arr[iZero[i]].fill(0)
  }
  for (let j = 0; j < jZero.length; j++){
    for (let i = 0; i < arr.length; i++){
      arr[i][jZero[j]] = 0
    }
  }

  return arr
}
/*
any 0s in the matrix turns that row and column into 0's
loop through 2d array and push in any i's and j's into their respective arrays
then loop through and fill int he 0's
*/
