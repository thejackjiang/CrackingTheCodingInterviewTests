const Stack = function(){
  this.container = []
}

Stack.prototype.pop = function(){
  return this.container.pop()
}

Stack.prototype.push = function(value){
  this.container.push(value)
}

Stack.prototype.peek = function(){
  return this.container[this.container.length - 1]
}

const QueueWithStacks = function(){
  this.stack = new Stack()
  this.flippedStack = new Stack()
}

QueueWithStacks.prototype.flip = function(){
  this.flippedStack = [...this.stack.container].reverse()
}

QueueWithStacks.prototype.push = function(value){
  this.stack.push(value)
  this.flip()
}

QueueWithStacks.prototype.pop = function(){
  return this.flippedStack.pop()
}

QueueWithStacks.prototype.peek = function(){
  return this.flippedStack[this.flippedStack.length - 1]
}
