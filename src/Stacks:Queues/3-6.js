const queue = function(){
  this.container = []
}

queue.prototype.push = function(value){
  this.container.push(value)
}

queue.prototype.pop = function(animal){
  if (!animal) return this.container.shift()
  if (animal === 'cat'){
    const index = this.container.findIndex((el) => {return el.type === 'cat'})
    return this.container.splice(index, 1)[0]
  }
  if (animal === 'dog'){
    const index = this.container.findIndex((el) => {return el.type === 'dog'})
    return this.container.splice(index, 1)[0]
  }
  else {return false}
}
