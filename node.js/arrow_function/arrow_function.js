const foo =  (x,y)=>{
  console.log('2줄 이상');
  return x + y;
}

const foo1 =  (x)=> x;


console.log(foo1('arrow function'));
console.log(foo(1 , 7));