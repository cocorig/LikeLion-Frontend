

## 🔔   button태그 & a태그


||`a`|`button`|
|:---|---:|:---:|
|역할|하이퍼링크|사용자의 동작 실행을 위한 트리거|
|기능|다른 페이지 혹은 페이지 내의 특정 영역으로 이동|브라우저 기본동작 없음. JS를 이용하여 동작 추가,(submit: form 전송 / reset: form 초기화)|
|키보드 |엔터|스페이스, 엔터|
|📌 주의  |href 값 없이 JS로 동작하게 하면 ✖️ ,마우스커서의 모양 변경을 위해서 a 태그를 사용해서는 ✖️  |JS로 동작,button focus가 예쁘지 않아서 outline을 숨기면✖️  , 누르는 효과를 주기위해서 button을 사용해서도 ✖️ ,접근성 측면에서, 버튼의 최소 44x44px 크기를 권고|






-----


## 🌈 가상요소 선택자를 이용해서 꺽쇠모양 넣는 방법

<br/>

html코드
```html
<p class="read">Read</p>
```
css코드
```css

.read {
 	width: 60px;
    font-size: 14px;
    text-decoration: underline;
    position: relative;
    background-color: aquamarine;
}

.read::after{
     content: '';
    /* 화면에 나오게 */
    display: block;
    width: 5px;
    height: 5px;
    position: absolute;
    right: 0;
    top: 50%;
    border:solid #5a6a72; 
    border-width: 3px 3px 0 0;
    transform: translateY(-50%) rotate(45deg); 
}
```

<br/>

### 1. Read옆에 위치를 맞춰주기 위헤 position속성을 추가하였다.
위치를 파악하기 쉽게 background-color를 넣어봤다.

![](https://velog.velcdn.com/images/cocorig/post/c5b0a0cf-4f17-4789-853c-fa8afef52773/image.png)

- 가상요소 선택자의 기준이 Read가 되기 때문에   right: 0 , top: 0를 주면 위의 사진처럼 보이게 된다.


---
### 2. Read의 가운데에 맞춰주기 위해  top: 50%;를 해주면 위와 같이 보인다.
![](https://velog.velcdn.com/images/cocorig/post/69caa087-b616-4a6e-b721-6b02380dc77e/image.png)

  
- 꼭짓점을 기준으로 요소가 움직였기 때문에 가운데 정렬이라고 할 수 있지만 요소를 봤을 때는 그렇지 않다.




-----

### 3. transform: translateY(-50%)를 주면 가운데 정렬이 된다.
![](https://velog.velcdn.com/images/cocorig/post/bb8d3652-35bc-4f9e-867d-1c2ec2d400d6/image.png)

- translate(x,y) 가로 안에 첫 번째 값은 x축을 기준으로 두 번째 값은 y축을 기준으로 옮겨준다.
그리고 %는 옮길 요소의 넓이를 기준으로 옮기는 것이다.

----

### 마지막으로 꺽쇠 모양을 맞춰주기 위해  border-width에 top, rigth만 값을 주고, rotate로 45도 돌려주면 아래와 같이 꺽쇠모양이 된다.
  

![](https://velog.velcdn.com/images/cocorig/post/b5c16000-581c-4e88-a6a6-2aa1cc792b2e/image.png)

```css
	border:solid #5a6a72; 
    border-width: 3px 3px 0 0;
    transform: translateY(-50%) rotate(45deg); 
```
 width값을 주면 Read 옆에 잘 정렬된 걸 볼 수 있다.!
 
![](https://velog.velcdn.com/images/cocorig/post/b858f6b7-e276-405b-a9c9-af7239db692a/image.png)



참고
>45deg 는 >
225deg 는 <
135deg 는 ∨
315deg 는 ∧
