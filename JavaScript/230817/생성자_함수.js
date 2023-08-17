//생성자 함수 (Constructor)

// **생성자 함수의 특징** new가 붙어야함
// 객체를 만드는 역할
// - 일반 함수와 구분하기 위해 생성자 함수 이름 첫 글자는 `대문자`로 시작합니다.
// - 반드시 'new' 연산자를 붙여 실행해야합니다. new 연산자는 생성자 함수의 this 가 인스턴스를 바라보도록 만들어주는 역할을 합니다.

// 인스턴스 -  생성자힘수를 통해서 return한 객체 값

let book = {
  책이름: '알잘딱깔센 JavaScript 비동기 프로그래밍 - 비동기 너 내 동기가 돼라',
  책가격: 0,
  저자: ['구나영', '김경림'],
  출판일: '2022.08.12'
}
// 책이 100권이라면?


function Book(책이름, 책가격, 저자, 출판일){
  this.책이름 = 책이름
  this.책가격 = 책가격
  this.저자 = 저자
  this.출판일 = 출판일
  this.contents = function(){
    console.log('이 책의 내용은..');
  }
}
// return 키워드가 없지만 return 된다?? 객체로
const newBook = new Book;
console.log(newBook.책가격); // this는 인스턴스(new Book)를 바라본다



let book1 = new Book('JS', 0, ['이호준'], '2099.10.30')
//  Book { -> 이 객채가 인스턴스
//   '책이름': 'JS', 
//   '책가격': 0, 
//   '저자': [ '이호준' ],
//    '출판일': '2099.10.30'
//  }
let book2 = new Book('Python', 100000, ['이호준'], '2099.11.30')
let book3 = new Book('React', 1000000, ['이호준'], '2099.12.30')
console.log(book1.contents);
console.log(book1)

// - 생성자 함수를 사용하는 이유
//     - 동일한 프로퍼티를 가지는 객체 생성
//     - prototype을 이용하여 메모리 효율을 높일 수 있음