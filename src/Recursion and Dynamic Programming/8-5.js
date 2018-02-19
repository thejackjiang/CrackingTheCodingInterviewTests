const recursiveMult = (a, b) => {
  let product = 0
  const recurse = (a, b) => {
    if (a > 0) {
      product += b
      recurse(a - 1, b)
    }
  }
  recurse(a, b)
  return product
}
