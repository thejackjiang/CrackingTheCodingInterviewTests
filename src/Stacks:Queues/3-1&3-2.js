const threeInOne = function(){
  this.array = []
  this.first = 0
  this.second = 0
  this.last = 0
  this.firstMin = Infinity
  this.secondMin = Infinity
  this.lastMin = Infinity
}
threeInOne.prototype.push1 = function(value){
  this.array.splice(this.first, 0, value)
  this.first++
  this.second++
  this.last++
  if (value < this.firstMin) this.firstMin = value
}

threeInOne.prototype.push2 = function(value){
  this.array.splice(this.second, 0, value)
  this.second++
  this.last++
  if (value < this.secondMin) this.secondMin = value
}

threeInOne.prototype.push3 = function(value){
  this.array.splice(this.last, 0, value)
  this.last++
  if (value < this.lastMin) this.lastMin = value
}

threeInOne.prototype.pop1 = function(){
  if (this.firstMin === Infinity) return null
  const result = this.array.splice(this.first - 1, 1)[0]
  this.first--
  this.second--
  this.last--
  return result
}

threeInOne.prototype.pop2 = function(){
  if (this.secondMin === Infinity) return null
  const result = this.array.splice(this.second - 1, 1)[0]
  this.last -= this.last
  return result
}
threeInOne.prototype.pop3 = function(){
  if (this.lastMin === Infinity) return null
  return this.array.pop()
}
threeInOne.prototype.peek1 = function(){
  if (this.firstMin === Infinity) return null
  return this.array.slice(this.first - 1, this.second)[0]
}
threeInOne.prototype.peek2 = function(){
  if (this.secondMin === Infinity) return null
  return this.array.slice(this.second - 1, this.last)[0]
}
threeInOne.prototype.peek3 = function(){
  if (this.lastMin === Infinity) return null
  return this.array[this.array.length - 1]
}
