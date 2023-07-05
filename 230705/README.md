


# 📝 HTML Note


### title 

- title부분에는 텍스트만 포함( 특수 문자나 이모지 x)<br/>
검색엔진이 사용자에 제목을 보고 탐색하기 때문에 적당한 제목이 노출되도록 개발하는게 중요하다.
페이지를 정확하게 파악하기위해 정확한 제목을 적어줘야 한다.

ex ) <br/>
`<title>HTML: 구획 제목 요소 - MDN web Docs</title>`
사용자는 현재 열려있는 페이지가 'HTML: 구획 제목 요소'라는 걸 알 수 있고,'MDN web Docs'가 해딩 페이지의 정보를 제공한다는 것을 알수있다.
사용자가 페이지 내의 링크를 검색할 때 스크린 리더는 링크의 텍스트를 읽어주며, 이러한 기능을 활용하려 웹페이지를 접근성을 고려하여 제작해야 한다.


```html
<section>
    <h1>section h1</h1>
    <h2>section section h2</h2>
  <section>
    <h1>section section h1</h1>
    <section>
      <h1>section section section h1</h1>
    </section>
  </section>
</section>
```
* 위의 h1태그의 size는 점점 작아진다.
h1은 페이지에 하나만 쓰도록 권장하고,사용자가 영역에 중첩에서 사용한 경우, 사용자의 의도를 ‘예상’하여 폰트의 크기를 다르게 보여주는 것으로 추측된다.

* section뿐만 아니라 article, aside, nav 안에서 h1, h2 크기는 같다.

### p태그
-  하나의 문단 , 블록 요소

### br태그
- break(line break) 텍스트 안에 줄 바꿈 처리를 해준다(2번 연속하여 사용x, 여백은 css를 사용ㅎ여 적용하자!)

### wbr태그 
 - 현재 요소의 줄 바꿈 규칙을 무시하고,브라우저가 줄을 바꿀 수 있는 위치를 나타낸다

###  address태그

- 해당 콘텐츠에 대한 **연락처 정보**
- 물리적 주소, URL, 이메일 주소, 전화번호, SNS 정보, 좌표 등
- 연락처가 가리키는 개인, 조직, 단체의 이름을 반드시 적어주세요!
- 페이지 헤더 혹은 푸터에 배치하여 사업체에 연락 방법으로 사용할 수 있습니다.
- article 내에 사용하여 글의 작성자를 나타낼 수도 있습니다.
- 연락처 외의 정보(출판일 등)를 담아서는 안 됩니다

<aside>
💡 학원, 병원, 식당처럼 직접적인 연락처라 필수인 곳이라면 이 태그를 꼭 사용하는 것이 좋습니다.

</aside>

------


# 📝 CSS Note

<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="font.css">
<link rel="stylesheet" href="layout.css">
<link rel="stylesheet" href="main.css">  제일 우선순위가 높다.
다중 스타일 시트의 순서를 고려해야 한다.
마지막 스타일 시트가 우선순위가 높다!


<br/>

### CSS 상속


상속을 받게 할건지 안받게 할껀지 조절할 수 있다. <br/>
`inherit`: 선택한 요소에 적용된 속성값을 부모와 동일하게 상속받는다. <br/>
`initial`: 브라우저 기본 스타일 속성을 따르게 한다. <br/>
`unset` : 자연적으로 상속된 값을 초기화 ,inherit => initial처럼 작동한다.

`color`속성은 자식요소에게 상속이 되지만 `width`, `height`,` margin`, `padding`,` border` 와 같은 것은 상속되지 않는다.
