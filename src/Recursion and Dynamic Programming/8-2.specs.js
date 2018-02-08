describe('navigates 2d array from top left corner to bottom right corner avoiding 1s and returns path. will prioritize right than down', () => {
  const maze = [[0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0],
                [0, 0, 0, 0, 'X']]

  const maze2 = [[0, 0, 0, 0, 0],
                 [0, 1, 0, 1, 0],
                 [0, 1, 0, 1, 0],
                 [0, 1, 1, 1, 1],
                 [0, 0, 0, 0, 'X']]

  it('no obstacles', function (){
    expect(mazeRunner(maze, 0, 0)).toEqual([ [ 0, 0 ],
                                       [ 0, 1 ],
                                       [ 0, 2 ],
                                       [ 0, 3 ],
                                       [ 0, 4 ],
                                       [ 1, 4 ],
                                       [ 2, 4 ],
                                       [ 3, 4 ] ])
  })
  it('hallway obstacle to make robot walk backwards', function (){
    expect(mazeRunner(maze2, 0, 0)).toEqual([ [ 0, 0 ],
                                             [ 0, 1 ],
                                             [ 0, 2 ],
                                             [ 0, 3 ],
                                             [ 0, 4 ],
                                             [ 1, 4 ],
                                             [ 2, 4 ],
                                             [ 1, 4 ],
                                             [ 0, 4 ],
                                             [ 0, 3 ],
                                             [ 0, 2 ],
                                             [ 1, 2 ],
                                             [ 2, 2 ],
                                             [ 1, 2 ],
                                             [ 0, 2 ],
                                             [ 0, 1 ],
                                             [ 0, 0 ],
                                             [ 1, 0 ],
                                             [ 2, 0 ],
                                             [ 3, 0 ],
                                             [ 4, 0 ],
                                             [ 4, 1 ],
                                             [ 4, 2 ],
                                             [ 4, 3 ] ])
  })

})

