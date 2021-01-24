
const add = (a,b) =>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(a+b)
        },2000)
    })
}

/*add(2,5).then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})*/
//Multiple serial promise calls, without chaining


/*add(2,5).then((data)=>{
    console.log(data)

    add(data,5).then((data)=>{
        console.log(data)
    }).catch((e)=>{
        console.log(e)
    })
}).catch((e)=>{
    console.log(e)
})*/

//Promise chaning

add(3,5).then((data)=>{
    console.log(data)
    return add(data,6)
}).then((data)=>{
    console.log(data)
}).catch((e)=>{
    console.log(e)
})