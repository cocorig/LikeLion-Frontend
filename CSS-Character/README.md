# CSS-Character


## 1.소개 


- 멋쟁이사자처럼 프론트엔드 스쿨 7기에서 진행한 HTML과 CSS로 캐릭터 그리기 과제입니다.
- 멋쟁이사자처럼 회고조에서 정한 제 캐릭터를 애니메이션을 추가해서 구현하였습니다.

▶️  결과물

[배포된 캐릭터 페이지입니다](https://cocorig.github.io/likelion-Frontend/CSS-Character/index.html)

<img src="https://github.com/cocorig/likelion-Frontend/assets/95855640/af3f0797-697a-4aee-8a86-81efe8a64ea4" width="100%">


## 2. 기술


### 2-1 🔰 대표 마크

- 양쪽 색깔이 다르기 때문에 왼쪽과 오른쪽으로 나눠서 왼쪽 마크에는 `transform: skew(50deg)`, 오른쪽 마크에는 `transform: skew(-50deg)`를 통해 평행사변형 모양을 구현하였습니다.
- 하나로 합치기 위해 `transform: rotate(90deg)`를 통해 90도 회전을 시켜 마크 모양 형태를 만들어주었습니다.


<p align="center"><img src="https://velog.velcdn.com/images/cocorig/post/649ed6d8-5b11-4c1f-91d6-fa9e9fb430ab/image.png"></p>

### 2-2 머리 모양

#### 양 쪽 머리모양
- 머리 모양을 한 번에 그리기가 쉽지 않았기 때문에 고민을 많이 한 부분입니다.
 양쪽 머리 부분은 모양이 같기 때문에 방향만 다르게 구현하였습니다.
`border-bottom-right-radius: 200px, border-bottom-left-radius: 200px`로 아래 부분만 모양을 둥글게 만들어줬고,  `box-shadow: inset`을 통해 안 쪽 그림자를 구현하였습니다.
`scaleX(-1)`를 통해 반전을 시켜 오른쪽 머리모양을 똑같이 만들어주었습니다.
#### 가운데 머리모양
 -  가운데 머리모양은 `border-radius: 50% 50% 50% 50% / 100% 100% 0% 0%`을 통해 각 각 모서리에 모양을 내주었습니다.

 ![](https://velog.velcdn.com/images/cocorig/post/fc256a30-f9df-4b2a-a1fa-82a3d0619004/image.png)

### 2-3 눈동자 애니메이션


- 눈이 초롱초롱한 듯한 애니메이션을 효과를 주고 싶었기 때문에 큰 눈동자와 작은 눈동자의 클래스를 나눠  커졌다 작아졌다 반복하는 애니메이션을 구현하였습니다.

-  캐릭터의 표정을 주기 위해 오른쪽 눈에만 bright-line 클래스를  추가해 기존의 눈 모양이 사라졌을 때 < 모양이 나타나도록 애니메이션을 구현하였습니다.

![GIFMaker_me (1)](https://github.com/cocorig/likelion-Frontend/assets/95855640/6426f558-7332-4e54-a090-475e4c5c58f4)

### 3. 느낀 점

이번 과제를 통해 css의 가상 클래스와 transfrom 속성 , @keyframes에 대해 자세히 알게 된 시간이었습니다.
처음에 과제를 전달받았을 땐  어떤 거부터 시작해야 할지 고민을 많이 했지만, 차근차근 종이에 레이아웃을 짜고, 코드로 구현해 모양을 만들어나가는 게 흥미로웠습니다.
추후 애니메이션 부분을 더 공부해  자연스럽게 눈 모양이 변하게 효과를 추가할 예정입니다.