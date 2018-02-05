describe('implement a queue for animal shelter ', () => {

const shelter = new queue()
const dog1 = {
  type: 'dog',
  name: 'dog1'
}
const dog2 = {
  type: 'dog',
  name: 'dog2'
}
const cat1 = {
  type: 'cat',
  name: 'cat1'
}
const cat2 = {
  type: 'cat',
  name: 'cat2'
}

shelter.push(cat1)
shelter.push(dog1)
shelter.push(cat2)
shelter.push(dog2)


  it('pushed 4 animals in', () => {
    expect(shelter.container.length).toEqual(4)
  })
  it('can pop cat', () => {
    expect(shelter.pop('cat')).toEqual(cat1)
  })
  it('can pop cat', () => {
    expect(shelter.pop('dog')).toEqual(dog1)
  })
  it('can pop dog or cat', () => {
    expect(shelter.pop()).toEqual(cat2)
  })
  it('should be only 1 animal left in shelter', () => {
    expect(shelter.container.length).toEqual(1)
  })

})
