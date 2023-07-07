## CSS 선택자 우선순위

1.후자우선 원칙

    똑같은 속성과 똑같은 태그일 때 뒤에 나오는 CSS가 더 높다.
   `점수가 똑같다면 후자가 더 우선순워가 높다.`

2.구체성의 원칙
```html



  &amp;lt;p id=＂id＂ class=＂class＂&amp;gt;
		1. 이 글자는 어떤 색일까요?
	&amp;lt;/p&amp;gt;
  &amp;lt;p id=＂id＂ class=＂class＂ style=＂color:red＂&gt;
		2. 이 글자는 어떤 색일까요??
	&lt;/p&gt;

```

``` css
div #id{
  color:green;
}
p{
  color:black;
}
#id{
  color:blue;
}
.class{
  color:yellow;
}

```

여기서 첫 번째 p 태그의 color는 green이고 , 두 번째 p태그는 red이다
div안에 있는 #id가 더 구체적이기 때문에 green으로 적용된다.
더 구체적인 속성이 더 우선순위가 높다.
`단, 점수가 아무리 높더라도 클래스선택자가 유형 선택자(태그)보다 높다.`
 인라인 속성(1000점) &amp;gt; id 선택자 (100점)&amp;gt; class , 가상, 속성 class (10점)&amp;gt; 타입,가상요소 선택자 (1점)&amp;gt; 전체 선택자(*) (0점)

3.중요성의 원칙

!important 
어떤 CSS의 선언보다 우선한다.
CSS의 상속을 깨트리기 때문에 오류/버그 발생 시 수정을 어렵게 한다.

-----

## 블록 레벨 요소 VS 인라인 레벨 요소


블록요소는 부모에 영향을 받아서 한 줄을 꽉 채움, 줄 바꿈 처리가 일어난다. 더 큰 개념. 인라인 요소에 중첩은 안 되지만 a 태그 안엔 가능하다.
`width, height` 크기를 지정할 수 있고, `padding, border, margin` 속성을 사용할 수 있다.

인라인요소는 콘텐츠에 따라 할당된 공간만 차지.항상 블록 레벨 요소 내에 포함하고,문장, 단어 같은 작은 부분에 적용한다.
~~width, height 크기~~를 지정할 수 없고,` padding, border, margin `속성을 사용할 수 있지만, `좌우 margin 속성만`사용할 수 있다.

button은 인라인 블록요소이기 때문에 `가로로 쌓이지만`  `padding, border, margin ,width, height`를 지정할 수 있다.



## Box model

    나는 박스 자체가 100이면 좋겠는데 border를 추가했는데 120px 이 됐네? 그럼 100으로 만들려면 크기를 80으로 잡아야 하나 이런 계산은 힘든 그래서 box-sizing 사용한다.
    box-sizing: border-box;

    padding-top padding-right padding-bottom padding-left 순으로 작성
    padding : 위아래 , 양옆

    margin-top margin-right margin-bottom margin-left 순으로 작성
    margin : auto; 가운데 배치
    margin auto는 수평 정렬을 할 수 있지만, 새로 정렬을 적용할 수는 없다!!


    꾸미기 용도면 background로 , 이미지가 페이지의 문맥상 정보를 제공하거나, 이미지 최적화 등의 역할을 해야 한다면 배경이 아닌 &amp;lt;img&amp;gt; 태그를 사용하는 것을 권장한다.


## reset.css

각 브라우저마다 기본적으로 제공하는 스타일들이 있다.

### 크로스 브라우징?
어디에서 접속해도 다양한 사용자에게 비슷한 경험을 할 수 있도록 웹페이지를 제작하는 기법을 말한다.
