

## 🌎 :root
- 전역 css변수 선언
- 변경될수 있는 값들을 변수로 설정하는게 유지보수에 좋다.

## var()

-  var(사용자 지정 속성이름 , 대체값)

예시 : )
```html
<style>
    :root{
        --main-color : pink;
        --border-radius: 0.4em;
        --pene-padding : 0.5em 2em;

    }
    button{
                             /* 대체 값도 줘야함 */
        color: var(--main-color , white);
        border-radius:  var(--border-radius);
        padding: var(--pene-padding);
    }
</style>
<body>
    <!-- 버튼은 type을 적어야한다. -->
    <button type="button">버튼</button>
</body>

```

# calc()

- css 속성 값으로 계산식을 지정한다. 사칙연산 가능

 -   화면너비가 줄어들때 화면에 좌우 여백을 함께 배치할 수 있다.

- 최대 너비가 부모의 너비값의 100%를 기준으로 좌우 30px씩 좌우 여백을 줄 수 있다.
  
```css
    /*  좌우여백 , 여백이 30px씩 남개 ,최대값이 부모를 기준으로 100%*/
    /* 좌우여백 각 30px을 주기위해 */
    max-width: calc(100% - 60px);
   /* 컴테이너 자체를 가운데 정렬 */
    margin: 0 auto;

```
  
- 가로 너비 1400px 일대 수평 가운데 위치를 시킬 수 있다.
- 뷰포트가 1400px이하로 줄어들 경우 좌우 30px의 여백이 생기도록 할 수 있다.

```css

.wrap{

	width:1400px;
	margin: auto;
	max-width:calc(100% - 60px);
}

```
<br/>

## ⭐️ 주의
좌우 공백 꼭 줘야한다@@@!!
❌ calc(50% -80px) 
⭕️ calc(50% - 80px)

calc(8px + -50%)는 길이와 음의 백분율간의 덧셈으로 처리

<br/>


# clamp()

clamp 함수는 주어진 값이 특정 범위 내에 있는지 확인하고, 범위를 벗어나면 범위 내로 조정하는 함수이다.

일반적인 clamp 함수의 형식은 다음과 같다.

clamp함수는 최소값, 이상값 및 최대값의 세 가지 매개변수를 사용한다.

clamp 함수는 다음과 같은 동작을 합니다 :)

```html
<style>
    .px{
        font-size: 20px;
    }
    .px4{
        font-size: 40px;
        color: blue;
    }
    .clamp{
        background-color: aquamarine;
                        /* 최소값, 이상적인 값, 최대값  */
        font-size: clamp(1rem, 2.5vw, 40px);
    }
</style>
<body>
    <p class="px">안녕하세요</p>
    <p class="px4">안녕하세요</p>
    <p class="clamp">안녕하세요</p>
</body>

```
> 1vw는 뷰포트 너비의 1%에 해당하는 크기를 의미
> 뷰포트 너비가 1000px인 경우, 1vw는 1000 * 0.01 로 계산된다.(1vw === 0.01)

- font-size: clamp(1rem, 2.5vw, 40px);

- 1rem: 이것은 최소 글꼴 크기이며 1 "root em" 단위로 설정된다. => 기본 16px

- 2.5vw: 이상적인 글꼴 크기로 뷰포트 너비의 2.5%(0.025)로 설정, 이 값은 vw뷰포트 너비의 백분율을 나타낸다.

- 40px: 최대 글자 크기로 40픽셀로 설정됩니다. 뷰포트 너비가 매우 크면 글꼴 크기가 40픽셀을 초과하지 않는다.

- 이 clamp함수는 글꼴 크기가 뷰포트 너비에 따라 반응적으로 조정할 수 있다.


-----
# 가상 선택자

### `:hover`
- 마우스 올렸을때
  
### `:active`

- 클릭시 활성화(누르고 있는 동안) ,👀 hover 뒤에 적어줘야함~~!!

 ### `:focus`

- focus 받은 상태, 마우스 클릭시, tab했을때 적용된다.

###  `:focus-visible`

- 👀  마우스 클릭했을때는 적용이 되지않고, 키보드로(tab) 포커스했을때만 나타난다.


### `:focus-within`

-  내 자식요소중에 focus가 된다면 적용된다.
-  부모에서 해당 선택자를 사용한다.

###  `:enabled`, `:disabled`

- 활성화 /비활성화 상태일때


------- 

# 속성 선택자

## [속성이름`^=`"속성값"] 선택자

- 특정 문자열로 **시작**하는 요소를 모두 선택한다.

예시 :)

- class속성이 btn으로 시작하는 요소가 선택된다.


```css

[class^="btn"]{
	width:100px;
	height:48px;
}

class="btn"
class="btn reset"
class="reset btn"
class="btn-negative"
class="btn-positive"
```


<br/>



# 🧭 transtion 
 : CSS 속성값이 변할 때, 값의 변화가 `일정 시간에 걸쳐`  일어나도록 하는 것.

-----
<br/>

# 🎈 transform : 
요소에 다양한 변형을 줄 수 있는 속성.

 ## 1.  sclae 
  요소의 `크기를 조절`, 기본적으로 `자신의 가운데를 중심`으로 크기가 변함.
 - scale(1.5)는 1.5배 커진다는 뜻 , scale(x축 , y축)으로 별도로 지정할 수 있다.
  
## 2. rotate (회전)

- transform:rotate(0.5turn) -> 180deg
- transform-origin 을 통해 기준점을 변경가능,

## 3.  📐 translate  (위치 이동 , 기준점은 왼쪽 상단)
- 자신의 위치에서 x,y축으로 이동 시킬 수 있다

transition: width 2s linear 1s;
- width 속성을  / 2초 동안 / 처음부터 끝까지 일정한 속도로 / 1초 지연시킨 뒤에  transition 효과가 일어나는 것을 의미합니다.

------

# 🖥️ 웹페이지 렌더링

