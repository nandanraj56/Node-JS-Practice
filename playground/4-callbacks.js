const add= (a,b,callback)=>{
    //console.log(callback)
    setTimeout(()=>{
        
        callback(a+b);
        //console.log(callback)

    },2000);
}

add(2,3,(sum)=>{
 console.log(sum);
});