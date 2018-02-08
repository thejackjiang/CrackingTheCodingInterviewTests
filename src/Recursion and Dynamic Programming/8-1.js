const steps = (n) => {
  const step = [1, 1, 2, 4]
  for (let i = 4; i <= n; i++){
    step[i] = step[i - 1] + step[i - 2] + step[i - 3]
  }
  return step[n]
}
