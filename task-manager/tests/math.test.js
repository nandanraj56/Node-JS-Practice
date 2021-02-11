const {calculateTip} = require("../math")
test('hello',()=>{

})

test('Total should be 13',()=>{
    const total = calculateTip(10,.30)+10
    /*if(total!==13)
        throw new Error("total should be 13, got"+total)*/

    //Easy way to test is to use expect
    expect(total).toBe(13)
})
