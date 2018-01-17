describe('the function tMatrix', () => {
  const matrix = [[1, 2, 3, 4, 5],
  [1, 2, 3, 0, 5],
  [1, 2, 0, 4, 5],
  [1, 0, 3, 4, 5],
  [1, 2, 3, 4, 5]]
  const matrix2 = [[1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 0, 4, 5],
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4, 5]]
  const matrix3 = [[0, 2, 3, 4, 0],
  [1, 2, 3, 4, 5],
  [1, 2, 0, 4, 5],
  [1, 2, 3, 4, 5],
  [0, 2, 3, 4, 0]]
  it('turns the column and rows any elements in a MxN matrix to 0', function () {
    expect(tMatrix(matrix)).toEqual([[1, 0, 0, 0, 5],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [1, 0, 0, 0, 5]])
  })
  it('turns the column and rows any elements in a MxN matrix to 0', function () {
    expect(tMatrix(matrix2)).toEqual([[1, 2, 0, 4, 5],
    [1, 2, 0, 4, 5],
    [0, 0, 0, 0, 0],
    [1, 2, 0, 4, 5],
    [1, 2, 0, 4, 5]])
  })
  it('turns the column and rows any elements in a MxN matrix to 0', function () {
    expect(tMatrix(matrix3)).toEqual([[0, 0, 0, 0, 0],
    [0, 2, 0, 4, 0],
    [0, 0, 0, 0, 0],
    [0, 2, 0, 4, 0],
    [0, 0, 0, 0, 0]])
  })
})
