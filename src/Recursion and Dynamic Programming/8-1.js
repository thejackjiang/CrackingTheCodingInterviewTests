const steps = (n) => {
  const step = [1, 1, 2, 4]
  for (let i = 4; i <= n; i++){
    step[i] = step[i - 1] + step[i - 2] + step[i - 3]
  }
  return step[n]
}

/*
the first few number of steps is always 1, 1, 2, 4
to find the nth step, it is the sum of the last 3 before n
loop through to n and and fill out an array of n-1 length and return the nth element
*/
