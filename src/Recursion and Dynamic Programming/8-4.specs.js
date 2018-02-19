describe('function powerset returns the powerset of a given set', () => {

  it('empty set', function (){
    expect(powerSet([])).toEqual([[]])
  })
  it('set of 2 things', () => {
    expect(powerSet([1, 2])).toEqual([[], [1], [1, 2], [2]])
  })
  it('set of 3 things', () => {
   expect(powerSet([1, 2, 3])).toEqual([ [  ], [ 1 ], [ 1, 2 ], [ 1, 2, 3 ], [ 1, 3 ], [ 2 ], [ 2, 3 ], [ 3 ] ])
 })
})

