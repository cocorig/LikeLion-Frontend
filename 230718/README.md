# 🤔 헷갈리는 개념 정리

## transition vs animation 


## transition

 : <mark>상태가 변경되어야</mark> 애니메이션을 실행할 수 있다.

transition에는 `property`, `duration`, `[timing-function]`, `[delay]`
[] : 생략 가능

- property : 전환하고자 하는 css 속성,
all : 모든 속성 선택
initial : 속설 기본값으로 설정
inherit: 부모요소의 속성값을 상속받음
- duration : 효과가 얼만큼의 시간에 걸쳐 발생할 것인지 의미 1s =  1000ms 
- [timing-function] : 변화의 속도 
  - ease (중간으로 갈수록 빨리 끝에서 다시 느려짐) ,  ease-in (처음엔 천천히 뒤로 갈수록 빨리), ease-out(처음엔 빨리 뒤로 갈수록 느리게), ease-in-out, cubic-bezier() ,linear(처음부터 끝까지 일정한 속도로)
 -  [delay] : transition을 몇 초 뒤에 시작할지를 정한다.delay는 애니메이션이 처음 시작할 때만 적용된다.

------

##  animation: 
`name` `duration`  `timing-function `   `delay` `iteration-count`  `direction ` `fill-mode`;

```css

/* [ from ~ to 속성 ] */
@keyframes animation-name {
	from {}
	to {}
}

/* [ 0% ~ 100% 속성 ] */
@keyframes animation-name {
	0% {}
	50% {}
	100% {}
}

```

속성은 요소의 <mark>상태 변화와 관계없이</mark>애니메이션을 실행할 수 있다. 

timing-function : transtion속성과 똑같다. ease가 기본값 `steps(n) : n개의 단계`
iteration-count : 애니메이션을 몇 번 되풀이, 반복할지를 의미 , infinite 영원히 반복


### 💥 direction : 애니메이션의 진행 방향을 지정.
form  : 시작 
to  : 끝

- normal : from -> to
- reverse : to -> from

- <mark>alternate</mark> : from -> to -> from -> to 
alternate 값을 사용하면 애니메이션이 끝나고 다시 원래 자리로 뿅 돌아와서 시작되는게 아니라, 진행됐던 그대로 다시 역재생해서 돌아옴 
- alternate-reverse : to -> from -> to -> from


** 변화해야하는 속성에 대해서만 적어줌 
### 💥 fill-mode : 애니메이션이 시작되기 전과 끝난 후에 일어나는 일을 정의


#### animation-fill-mode: none | forwards | backwards | both | initial | inherit;

-  `none`; 애니메이션 전 과 시작상태가  기본 스타일 유지
- <mark>forwards</mark>; 애니메이션 마지막 상태의 CSS 스타일을 유지함 
- `backwards` :  애니메이션 처음 상태의 CSS 스타일을 유지함
- <mark>both </mark>:  backwards + forwards 둘 다


## normer 과 both 비교


- both는 애니메이션의 마지막 속성을 유지하고, normer은 기존 스타일로 돌아간다.

<img src="https://github.com/cocorig/HTML-CSS_Study/assets/95855640/02c446e1-0b54-4f20-92bb-57e1e4be53cb">