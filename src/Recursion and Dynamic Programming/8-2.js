const mazeRunner = (maze, i, j) => {
  const path = []
  const runner =  (maze, i, j) => {
    if (maze[0][1] === 1 && maze[1][0] === 1) return false
    if (maze[i][j] === maze[maze.length - 1][maze[0].length - 1]){
      return path
    }
    if (j < maze[i].length - 1 && maze[i][j + 1] !== 1){
      path.push([i, j])
      return runner(maze, i, j + 1)
    }
    else if (i < maze.length - 1 && maze[i + 1][j] !== 1){
      path.push([i, j])
      return runner(maze, i + 1, j)
    }
    else {
      maze[i][j] = 1
      if (i - 1 >= 0){
        path.push([i, j])
        return runner(maze, i - 1, j)
      }
      else {
        path.push([i, j])
        return runner(maze, i, j - 1)
      }
    }
  }
  return runner(maze, i, j)
}
