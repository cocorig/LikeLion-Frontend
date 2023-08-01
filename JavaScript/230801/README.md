
# JavaSCript 

##  초심자가 알아두면 좋은 주요 개념들(‘ECMA Script, JavaScript Runtime, Frameworks, Library, CSS in JavaScript, Module Bundlers’ )



###  크로스 브라우징
 - 웹 페이지 제작 시에 모든 브라우저에서 깨지지 않고 의도한 대로 올바르게(호환성) 나오게 하는 작업을 말한다.
- 어느 브라우저, 기기에서 사이트가 의도된 대로 보여지고 작동되는 기법이다.

### ECMA Script 
Ecma !== JavaScript

ES2015(ES6) (문법 대거 추가)
ES2016
ES2017

`ECMAScript`는 Ecma 인터내셔널에 의해 제정된 ECMA-262 기술 규격에 의해 정의된 범용 스크립트 언어이다.
스크립트 언어가 어떻게 생겨야 하는지에 관한 사양.

 ECMAScript는 스크립트 언어가 준수해야 하는 규칙, 세부 사항 및 지침을 제공한다.
`JavaScript`는 ECMAScript 사양을 준수하는 범용 스크립팅 언어이다.

새 버전의 ECMAScript가 나오면 JavaScript 엔진을 통째로 업데이트하지는 않고, 새로 추가된 ECMAScript 기능을 점진적으로 업데이트한다.

###  2. JavaScript Runtime

-  JavaScript 언어가 실행될 수 있는 환경(브라우저 , Node.js)
-  Node.js는 백엔드 개발이 아니여도 시스템에서 실행을 할 수 있다.

### 2-1. Browser

자바스크립트 엔진이 필수적이다.

* 자바스크립트 엔진이란 ?   
- 개발자가 작성한 자바스크립트 코드를 해석하고 실행시켜주는 `프로그램` 혹은 `인터프리터`(JavaScript interpreter)를 말한다.
두 개의 웹 브라우저는 명령어를 이해할 수는 있는 능력은 같지만 속도에서 차이가 날 수 있는데, 이는 JavaScript 엔진이 얼마나 효율적으로 JavaScript를 처리하고 있는가에 따라 다르기 때문이다.
* `바벨(Babel)`을 사용해서 신버전의 코드를 구버전의 코드로 호환 가능하도록 전환해주는 주된 기능이 있다.
행여 브라우저에서 아직 지원하지 않는 최신 기능을 사용해야 하는 상황이 발생한다면 바벨과 같은 트랜스파일러를 사용하여 코드를 변환해주면 된다.
바벨과 같은 트랜스파일러를 사용하여 코드를 변환(폴리필(Polyfill)): 신버전의 코드를 구버전의 코드로 변환한다.
파일과 기능단위로 폴리필(Polyfill) 사용이 가능하고 리액트의 JSX문법과 타입스크립트에 대한 변환도 지원한다.


자바스크립트 엔진 종류 
- V8 (Google Chrome, Opera, Edge, Node.js,네이버 웨일) : 2008년 등장한 구글의 V8
..

### 2-2 Node.js

- 자바스크립트가 브라우저 이외의 환경에서도 동작할 수 있도록 자바스크립트 엔진을 브라우저로부터 독립시켜 서버측에서 실행(백엔드 개발 가능)된다.

Node.js의 package manager > `npm` ,  `yarn`

`npm` : 패키지 관리 툴(앱 스토어), 기본적으로 내장되어 있어 사용이 매우 편리하다. 하지만, 다른 package를 바로 포함할 수 있는 코드를 자동으로 실행하므로 보안에 취약하다는 단점이 있다.
npm(흔히 npm이 'Node Package Manager'의 줄임말로 알려져 있으나, 공식적으로는 npm은 줄임말이 아닌 그 자체로 하나의 단어라고 한다.): 패키지 관리 툴(앱 스토어라고 생각해주세요.)

`yarn`: 페이스북(현 메타)에서 새롭게 발표한 패키지 관리 툴(앱 스토어)
안정성과 보안성 면에서 더 뛰어나지만 디스크 공간을 많이 차지한다는 단점이 있다.
yarn: 페이스북(현 메타)에서 새롭게 발표한 패키지 관리 툴(앱 스토어라고 생각해주세요.)

## 3. Frameworks (완성된 건물)
(프레임웤과 라이브러리의 경계가 모호한 것들도 많습니다. 따라서 '무조건 이렇다'라는 전제를 하시고 접근하시지 않기를 바랍니다.)

프레임워크는 개발자가 해당 기능 구현에 필요한 대부분의 기능을 `이미 구현해놓은 종합 선물 세트`
설먕서가 있고, 그 설명서대로 코딩을 해야한다.

라이브러리는 내 코드가 메인이 되고, 특정 기능을 가지고 와서 사용한다,

### 4. Library(건축물에 들어가는 부품)

프레임웤이 이미 모든 기능을 구현해놓은 반면 라이브러리는 일부분의 기능을 제공한다.

### 5. CSS in JavaScript (리액트 수업에서 경험)

- 프로젝트의 크기가 커질수록 스타일을 일일이 찾아 수정해야 하는 번거로움이 있기 때문에 JS에서 CSS를 컨트롤 할 수 있게 나온 개념이다.

> 인라인 스크립트는 왜 실무에서 사용하지 않을까?
유지보수,역할분담때문


# API 
Application Programming Inerface(응용 프로그래밍 인터페이스)
- 사용자 요청에 따라 원하는 데이터를 Serving 해주는 서버
## BOM (Browser Object Model)

- 브라우저에서 제공하는 API , 자바스크립트를 통해 브라우저에서 제공하는 기능들을 사용할 수 있도록 도와주는 역할을 한다.

window  - 브라우저의 가장 최상위 객체
> window.alert() : 브라우저에 메세지 다이얼로그를 띄웁니다.
window.prompt() : 브라우저에 사용자의 데이터를 입력받을 수 있는 입력 창을 띄웁니다.
window.confirm() : true 혹은 false 값을 반환하는 다이얼로그를 띄웁니다.

console.log() : 콘솔창에 로그 메세지를 보여줍니다.
console.error() : 콘솔창에 에러 메세지를 보여줍니다.
console.table() : 콘솔창에 데이터를 테이블 형태로 제공합니다.

> API: 카페에서 주문을 받는 사람(실제 바리스타 X), API는 점원과 같은 역할
여러분: 커피 한 잔 주세요.
점원: 넵, 알겠습니다. 여기 커피 한 잔 주문 들어왔어요.
바리스타: 네, 커피 내리겠습니다.
여러분: 브라우저에 경고창 띄어주세요
API: 넵, 알겠습니다. 여기 브라우저 경고창 하나 들어왔어요.
브라우저: 네! 경고창 띄우겠습니다.

프로그램에서는 점원(API)이 손님(프로그램)에게 주문(명령)을 받고, 그 주문(명령)을 손질&포장직원(프로그램)과 상호작용하여 포장된 생선(명령 수행 후 나오는 데이터)을 전달합니다.

즉, API는 프로그램끼리 소통 할 수 있도록 도와주는 인터페이스를 뜻한다.

###  API Server 

어떤 기능을 미리 만들어 두고 필요할 때 제공하는 것을 API 서버라고 한다.(지도 api,날씨 api)
공공데이터 포털에 가시면 Open API를 이용하여 각종 DATA에 접근할 수 있다.

## 변수

- 필요한 숫자나 문자와 같은 데이터를 보관할 공간에 이름을 붙이는 포스트잇 같은 역할을 하는 변수.

```javascript

let y = 4;
const z = 5;

```
> 모두 메모리 상에 올라간다





> 💥 var는 전역 변수를 선언할 때 사용합니다. 이제는 사용하시면 안됩니다. 함수스코프를 갖는다라고 얘기합니다.
const를 사용하세요! 보통은 '변하지 않는 값을 선언할 때 사용합니다.'라고 얘기하는데 저는 const로 사용해서 문제가 없으면 const를 사용하세요. 블록 안에(중괄호 안에) 선언이 되었을 경우 밖에서 이 값을 사용할 수 없습니다. 블록 스코프를 갖는다라고 얘기합니다.
let은 const로 사용해서 문제가 발생하는 경우 사용하세요. 보통은 '변하는 값을 선언할 때 사용합니다.' 블록 안에(중괄호 안에) 선언이 되었을 경우 밖에서 이 값을 사용할 수 없습니다. 블록 스코프를 갖는다라고 얘기합니다.



## 부분 문자열 추출


```javascript

let str = "Hello World";

```

##  slice

> str.slice(start [, end]) ->  []옵션

- `start부터 end까지`(end는 미포함)를 반환
- end인덱스가 생략된 경우엔 시작인덱스부터 끝까지 반환한다.
- start가 end보다 크면 빈문자열 출력
- start와 end는 음수가 될 수도 있다. 
-  음수를 넘기면 문자열 끝에서부터 카운팅을 시작한다.

```javascript
console.log(str.slice(0, 5)); //'Hello' , 0번째부터 4번째 위치까지 출력(5번째 위치의 문자는 미포함)
console.log(str.slice(7, 3)); //' ' 작동은 하지만 빈문자열이 출력
console.log(str.slice(2)); //'llo World' 2부터 끝까지 출력  
console.log(str.slice(-6, 0)); // 작동은 하지만 빈문자열이 나옵니다.
console.log(str.slice(-6)); //-6부터 끝까지 출력 -> '  World'
console.log(str.slice(-4,-1));// 'orl'
```

## substring

> str.substring(start [, end])

- start와 end `사이에 있는 문자열`을 반환한다.
- start가 end보다 커도 괜찮다.
- substring은 음수 인수를 허용하지 않는다.  음수는 0으로 처리된다.

```javascript

console.log(str.substring(0, 7));  //Hello W
console.log(str.substring(-6, 0)); // (0,0) -> ' ' 빈 문자열
console.log(str.substring(-6)); //(0) -> 'Hello World'
console.log(test.substring(-5, 9)); //'Hello Wor'
console.log(test.substring(-1, 9));//'Hello Wor'

console.log(test.substring(7, 3)); //  'lo W'
console.log(test.substring(3, 7)); //  'lo W'
```


## 부분 문자열 찾기

## indexOf

> str.indexOf(substr, [pos]) 
- 문자열 str의 pos에서부터 시작해, 부분 문자열 substr이 어디에 위치하는지를 찾아 위치를 반환하고, 없다면 -1반환.

- 대소문자도 구분한다.
- 두 번쩨 매개변수 pos는 옵션, 명사하면 해당위치 부터 검색이 시작된다.
- 정규식표현 불가능.

```javascript

let string = 'the beginning and the end';
console.log(string.indexOf('The')); //-1 , 댜소문자 구분
console.log(string.indexOf('the')); //0
console.log(string.indexOf('nd')); //첫번 째로 나온 nd를 찾음 ,15
console.log(string.indexOf('the' ,5 )); ///18 ,  5번째 인덱스에서 시작해 검색한다



```


자동화 순
Bootstrap > Tailwind > Sass > pure css

디자인이 나온 상태에서 project
Tailwind > Sass > pure css

시간이 매우 촉박하고 ROI가 제대로 나오는 프로젝트
Bootstrap

UI/UX, Code의 퀄리티가 높아지는 방향
Sass