
# 시맨틱 태그



## header

- 소개 및 탐색에 도움을 주고, 회사명, 제목, 로고, 검색 폼, 작성자 이름 등의 요소가 포함된다.
  헤더를 중첩하거나 헤더 안에 푸터를 사용할 순 없다.
```
<!-- 잘못된 예 -->
<header>
	<header></header>
</header>

<header>
	<footer>
	</footer>
</header>

```

## nav

- 모든 링크가 nav태그 안에 있을 필요는 없고, 페이지의 `주요 탐색 링크`를 위한 태그이다.
- 하나는 사이트 전체 탐색, 다른 하나는 현재 페이지 내 탐색으로 사용하는 등, 하나의 웹페이지에 여러 개의 nav 태그를 가질 수 있다.


## footer

- 저작권, 작성자, 관련 문서(약관)등을 내용을 담는다.

## main

- 주요 콘텐츠를 나타낸다.
- 주의할 점: 웹페이지에서 한번만 사용할 수 있고, 이 페이지에서 반복되지않고 주요 영역을 말한다.
- 쿠팡이나 검색이 중요한 서비스를 하면 검색 폼이 주요 기능이기때문에 예외이다.

## article(독립적)

- 그 구획만 따로 배포해도 사용할 수있는 독립적인 구획을 나타낸다.
- 다른 기능에 영향을 주지않고, 제거해도 페이지는 정상적으로 돌아간다.
- 게시판, 블로그 글, 매거진, 뉴스 기사, 위젯, 실시간 채팅 창에 사용된다.
- `제목 요소`를 `자식`으로 포함해야 한다.

## section(앞 뒤 문맥 연결)
- `제목 요소`를 `자식`으로 포함해야 한다.
  
> 💡 article vs section

일단 article 사용을 우선 고민해보자!
독립적으로 사용한다면 article 사용하고,
웹페이지의 앞뒤 문맥이 연결성이 필요하거나, 더 적합한 의미를 가진 요소가 없을 때 section을 사용하자!
단순 스타일링이 목적이라면 div 요소를 사용한다.
article들을 묶어 줄때도 사용할 수 있다.

## aside (주석,더 알고싶은 부분을 선택할 수 있는 부분)

- 광고, 배너 등에 사용할 수있다. 
- 문서 주요 흐름에 따라가지 않고, `보조적인 역할`만 하는 공간이다.

-----

### hr

-  주제가 변경되었을 때 사용할 수있다.
-  요즘은 많이 사용하진 않는다. 


-------

# 스타일링을 위해서만 사용하는 태그들

## div 

- 블록 컨테이너
- 공간을 나누는 것 외에 별다른 기능이 없다.

## span 

- 인라인 컨테이너, 스타일을 적용하거나 인라인 요소를 묶을 때 사용한다.


# ☁️ float 


### ✋ 주의할 점

#### 1. float요소를 주면 블록요소로 변한다?!
float는 블록 레이아웃을 사용을 뜻하기도 한다.
inline, inline-block 요소에 float 속성을 주게되면 block으로 계산되어 적용된다.
span태그는 인라인요소지만 float요소를 줬기때문에  블록요소로 변해 margin값이 들어간다. 밑에 사진을 참고하면 주황색부분의 margin속성이 들어간걸 볼수있다.
![](https://velog.velcdn.com/images/cocorig/post/97e4480e-3e8b-4e3b-bcd3-240e31e86988/image.png)

#### 2.자식 요소들이 모두 float 속성을 가지게 될때?!

부모 요소의 높이에 자식 요소들의 높이가 포함되지 않는 것에 주의해야 한다.

- 부모태그인 container에 자식요소(A,B,C박스)들의 높이가 포함되지 않는걸 볼수있다.
![](https://velog.velcdn.com/images/cocorig/post/36fd3636-149a-4f35-a8b9-ef633aa2706b/image.png)

### ⭐️ 해결방법 



- 첫번째 방법 : 부모요소에 overflow:hidden 주기

-- 자식 요소의 너비가 부모 요소의 너비보다 크면 넘치는 부분이 잘리기 때문에 주의해야한다.
```css
.container{
	overflow:hidden;
}
```
<br/>

- 두번째 방법 : 부모의 가상 요소 ::after 를 사용하기

```html
<div class="container  clear-fix">
    container
    <div class="box box1">A</div>
    <div class="box box2">B</div>
    <div class="box box3">C</div>
</div>
```

```css
.clear-fix::after{
 /* 뒤에 내용이 빈 블럭요소를 만들겠다는 뜻. */
	  content: '';
      display: block;
 /*   더 이상 float의 영향을 받지 않도록 설정 */
      clear: both;
}
```
주로 clear-fix라는 클래스를 따로 만들어 가상요소를 만들고 그 클래스를 float된 요소의 부모요소에 주는 방법을 주로 이용한다.

그럼 다음과 같이 보여진다.
![](https://velog.velcdn.com/images/cocorig/post/f7916037-9e7d-4811-9a81-72f209d536d6/image.png)

-------


# 🐙  flex

- flex를 쓰는 이유 ? 
유지보수나 반응형 웹에 만들때 적용할 수 있고,
길이가 어떻게 변할지, 가변적인 요소가 있을때 사이즈를 고정값이 아닌 유연한 값으로 처리할 수 있기때문에  레이아웃을 흐트러지는걸 방지할 수 있다.

### align-items, align-content


- aline-content : 교차 축의 아이쳄들이 여러 줄일때 사용한다.
- aline-itmes : 한 줄일때 적용한다.
- flex-wrap :  align-content상태에서 사용해야 한다.
    - 한 줄에 배치되게 할 것인지, 가능한 영역 내에서 여러 행으로 나누어 표현할 것인지 결정한다.






------

## flex-item에 사용하는 속성들

###  flex 축약 속성

> flex: `<flex-grow> <flex-shrink> <flex-basis>;`


flex-grow 는 flex 아이템이 팽창하는 비율을 설정한다. (기본값 0) <br/>
flex-shrink 는 flex 아이템이 수축하는 비율을 설정한다. (기본값 1)<br/>
flex-basis 는 flex 아이템이 팽창하고 수축하는 기준 크기를 설정한다.(기본값 auto)<br/>


 
### 1 . flex-basis
px ,em 단위값 사용 ,flex-item의 초기 크기를 설정,기본크기, container의 flex의 방향에 해당하는 요소의 크기를 정한다.<br/>
flex-basis 값이 적용되어있다면 row일 경우 width 값이 무시, column일 경우 height 값이 무시된다.


### item B에 flex-basis: 300px;를 주었을 때

* flex-direction: column일 때


<img src="https://velog.velcdn.com/images/cocorig/post/5a9e377a-71cd-495a-b8bb-480958a9ab06/image.png" width="100%" height="100%">


* flex-direction: row일 때

<img src="https://velog.velcdn.com/images/cocorig/post/6f9662e7-2bfa-4f3a-af06-eaa402c96a32/image.png" width="100%" height="100%">


### 2. flex-grow 

item에 설정을 주지 않았을 때 나머지 부분(회색 부분)은 여백이 된다.


<img src="https://velog.velcdn.com/images/cocorig/post/cfbacb8f-e4c0-42b7-8506-d1a139d9f268/image.png" width="100%" height="100%">

 - item들이 container(회색 부분)을 채우고 싶을 때
 (flex-grow : 0이 기본값임)
 
 item에 똑같이 flex-grow: 1 값을 주었을 때  여백 전체를 각 item들이 균등하게 나눠가지는 것
 각각 1 / 5  씩 나눠갖는 것
 
 <img src="https://velog.velcdn.com/images/cocorig/post/da373188-f657-4740-b5eb-5bcbc3f2aee6/image.png" width="100%" height="100%">
 
 
 

 
 * 두 번째 item에 flex-grow: 2 값을 주었을 때 
 
  
 <img src="https://velog.velcdn.com/images/cocorig/post/df899c53-898d-4158-8a5f-5daca5d75502/image.png" width="100%" height="100%">


itemB만 2/6를 가져가고, 나머지는 1/6을 가져가서 itemB가 더 많은 여백을 가져가게 되는 걸 볼 수 있다.


### 3 . flex-shrink


flex-grow와 반대속성 , 줄이다는 뜻


### item B에 flex-shrink: 0을 줬을때 (flex-basis: 300px로 설정)

 예시 )
 <img src="https://github.com/cocorig/LikeLion-Frontend/assets/95855640/93c30210-11e7-47d8-9df0-72281fc4b94c" width="100%">
 
 

container 크기가 줄어들어도 item B는 줄어들지 않는다.
flex-shrink: 0 => 줄어들지 않게 하겠다는 뜻


----
 ### item A에 flex-shrink: 2 , item B에 flex-shrink: 1을 주었을 때
 (두 item에 flex-basis: 300px설정)



<br/>

  <img src="https://github.com/cocorig/LikeLion-Frontend/assets/95855640/5208226a-b809-4157-901a-f060b0b1d139" width="100%">


  - item A는 2/3  , item B는 1/3 만큼의 공간 분담을 하기 때문에 여백을 더 많이 가진 A가  item B보다  더 빨리 줄어드는 걸 볼 수 있다.

=>  flex-shrink가 사용되기 위해서는 item이 flex-basis 가지고 있을 때 그 값보다 줄이는 것을 통해 일어난다.

