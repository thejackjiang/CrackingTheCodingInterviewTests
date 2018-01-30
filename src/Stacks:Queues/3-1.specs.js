const threeInOne = function(){
  this.array = []
  this.second = 0
  this.last = 0
}

threeInOne.prototype.push1 = function(value){
  this.array.unshift(value)
  this.second++
  this.last++
}

threeInOne.prototype.push2 = function(value){
  this.array.splice(this.second, 0, value)
  this.last++
}

threeInOne.prototype.push3 = function(value){
  this.array.splice(this.last, 0, value)
}

threeInOne.prototype.pop1 = function(){
  return this.array.slice(this.second - 1, 1)[0]
}

const stack = new threeInOne()
stack.push1(10)
stack.push2(50)
stack.push3(100)
stack.pop1()

