
// pending
function sayHello(){
  return new Promise((resolve,reject) =>{
    resolve('Hello');

    reject(new Error())
  })
}

async function test(){
  const hello1 = await sayHello(); // await 이 코드가 끝난 다음에 밑에 있는 코드를 실행시키겠다.
  console.log(hello1);
}


test();

// // resolve 성공시 호출
// sayHello().then((resolveData) =>{
//   console.log(resolveData);
//   return resolveData;

// }).then((resolvedata)=>{ // 위에서 return된 resolveData가 매개변수로 들어옴
//   console.log(resolvedata);
//   return resolvedata;
// })
// .then((resolvedata)=>{ // 위에서 return된 resolveData가 매개변수로 들어옴
//   console.log(resolvedata);
// })
// .catch((error)=>
// console.log(error));
// // reject 실패시
