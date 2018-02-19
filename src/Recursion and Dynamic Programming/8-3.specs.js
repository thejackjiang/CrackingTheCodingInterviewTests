describe('function steps returns the possible ways someone can run up the stairs using 1,2 or 3 steps at a time given n steps', () => {

   it('4 steps', function (){
     expect(steps(4)).toEqual(7)
   })
   it('5 steps', () => {
     expect(steps(5)).toEqual(13)
   })
   it('10 steps', () => {
    expect(steps(10)).toEqual(274)
  })
})

