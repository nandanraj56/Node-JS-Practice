const {calculateTip} = require("../math")
const {celsiusToFahrenheit,fahrenheitToCelsius} = require("../math")
test('hello',()=>{

})

test('Total should be 13',()=>{
    const total = calculateTip(10,.30)+10
    /*if(total!==13)
        throw new Error("total should be 13, got"+total)*/

    //Easy way to test is to use expect
    expect(total).toBe(13)
})
test('Should convert 32 F to 0 C',()=>{
    expect(fahrenheitToCelsius(32)).toBe(0)

})
test('Should convert 0 C to 32 F',()=>{
    expect(celsiusToFahrenheit(0)).toBe(32)
})
