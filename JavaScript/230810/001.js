// 전달받은 객체의 키와 벨류값을 모두 출력하는 for문을 만들어보세요.

const person = {
  name: '재현',
  age: 20,
  gender: 'male'
};

// 1
for(let i = 0; i < Object.keys(person).length; i++){
 
  console.log(`key : ${Object.keys(person)[i]}, value : ${Object.values(person)[i]}`);
}

// 2

//key 구하기
const props =  Object.keys(person); //[ 'name', 'age', 'gender' ]
console.log(props);
//value 구하기  person[key이름]
console.log(person['name']); 
console.log(person['age']); 
console.log(person['gender']);

for(i = 0; i < props.length; i++){
  console.log(`key : ${props[i]}, value : ${person[props[i]]}`);
}

//Object.values() 는 객체의 값을 다 가져오는것



outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      break outer;
    }
    console.log(i, j);
  }
}
// 0 0
// 0 1
// 0 2
// 1 0
// 1 1
outer: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i + j === 3) {
      continue outer;
    }
    console.log(i, j);
  }
}