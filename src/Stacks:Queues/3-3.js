const stack = function(){
  this.limit = 5
  this.array = [[]]
}

stack.prototype.check = function(){
  if (!this.array[this.array.length - 1].length) this.array.pop()
}

stack.prototype.popCheck = function(){
  for (let i = 0; i < this.array.length; i++){
    if (this.array[i + 1] && this.array[i].length !== this.limit && this.array[i + 1].length){
      let diff = this.limit - this.array[i].length
      let next = this.array[i + 1].splice(0, diff)
      this.array[i] = this.array[i].concat(next)
    }
  }
  this.check()
}

stack.prototype.push = function(value){
  if (this.array[this.array.length - 1].length < this.limit) this.array[this.array.length - 1].push(value)
  else this.array.push([value])
  this.check()
}

stack.prototype.pop = function(){
  const popped = this.array[this.array.length - 1].pop()
  this.check()
  return popped
}
stack.prototype.popIndex = function(num){
  const popped = this.array[Math.floor(num / this.limit)].splice(num % this.limit, 1)
  this.popCheck()
  return popped[0]
}
