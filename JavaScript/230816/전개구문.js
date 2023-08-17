//전개 구문 : 배열이나 객체를 쉽게 복사하거나, 새로운 배열이나 객체를 생성할 수 있습니다. 전개 식이라고 표현하기도 합니다.

// 1.1 배열의 전개 구문(기존 배열을 건드리지 않는다, )

const 과일들 = ['사과', '파인애플', '수박'];
const 과일들2 = [...과일들];  // 값 자체를 복사한다. 참조를 공유하지않고 새로운 배열을 만든다.

과일들2.push('키위');//사과,파인애플,수박,키위
console.log(`${과일들2} & ${과일들}`);//사과,파인애플,수박,키위 & 사과,파인애플,수박




// 차이점
const 과일들3 =  과일들; // 과일들의 겂 자체가 복사되서 할당 x , 값 주소가 할당된다
console.log(과일들3); 
과일들3.push('당근')
console.log(과일들);//[ '사과', '파인애플', '수박', '당근' ] 주소를 공유하고 있기때문에 과일들3에 push한 '당근'이 들어있다


const 색깔 = ['검정', '빨강', '분홍']
const 과일들4  = [...과일들];




// 1.2 객체의 전개 구문

const 위니브1 = {개리: 1, 빙키: 2};
const 위니브2 = {라이캣: 3};
const 위니브3 = {...위니브1, ...위니브2};
// 역시 기존 객체를 복사해 완전히 새로운 값을 할당할 수 있습니다.
console.log(위니브3);//{ '개리': 1, '빙키': 2, '라이캣': 3 }


const me = { name: "재현", address: "제주" };
const clonedMe = { ...me };
console.log(clonedMe); //{ name: '재현', address: '제주' }
clonedMe.age = 22;
console.log(clonedMe); // { name: '재현', address: '제주', age: 22 }
console.log(me); //{ name: '재현', address: '제주' }

//name,address & name,address,age
console.log(`${Object.keys(me)} & ${Object.keys(clonedMe)}`);



const me1 = { name: "재현", address: "제주" };
const newAddress = {address : "서귀포시"};
const newMe = {...me1, ...newAddress}

// 중복된 key의 값이 있다면 나중에 온 값이 덮어버린다. 업데이트 하고 싶은 값을 뒤에 반영해야함
console.log(newMe);//{ name: '재현', address: '서귀포시' }


const me2 = { name: "하연", address: "경기" };
const newAddress1 = {address : "제주시"};
// 업데이트 하고 싶은 값을 뒤에 반영해야함
const newMe1 = { ...newAddress1 , ...me2}
// { address: '경기', name: '하연' }
console.log(newMe1);