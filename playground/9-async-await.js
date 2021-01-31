function main() {
    return new Promise( (resolve,reject) => {
      console.log(3);
      reject(4);
      console.log(5);
    });
  }
  
  async function f(){
      console.log(2);
      try{
        let r = await main();
      console.log(r);
      }
      catch(e){
        console.log("j");
      }
      console.log(99);
      
  }
  
  console.log(1);
  f();
  console.log(6);

