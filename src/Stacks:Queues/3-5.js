const sortStack = function(){
  this.container = []
}

sortStack.prototype.pop = function(){
  return this.container.pop()
}

sortStack.prototype.push = function(value){
  this.container.push(value)
}

sortStack.prototype.peek = function(){
  return this.container[this.container.length - 1]
}

sortStack.prototype.sort = function(){
  this.container.sort((a, b) => {return a - b})
}

