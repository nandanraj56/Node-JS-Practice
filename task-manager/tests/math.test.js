const {calculateTip} = require("../math")
const {celsiusToFahrenheit,fahrenheitToCelsius,add} = require("../math")
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
//one, way to call async code
test('add two numbers test',(done)=>{
    add(3,4).then((data)=>{
        expect(data).toBe(7)
        done()
    }
    )
})

//Better way to test async code
test('add two number test async',async()=>{
    const sum = await add(5,8)
    expect(sum).toBe(13)
})