# Design file
https://www.figma.com/file/XCBWidUFVHNkzrnJ0lDgVR/FOX?type=design&node-id=0%3A1&mode=design&t=dcffZEvqf6JSmD9x-1

# Text
```
Fox

Lorem ipsum dolor sit amet,
consectetuer adipiscing elit. Aenean
commodo ligula eget dolor. Aenean
massa. Cum sociis natoque
penatibus et magnis dis parturient
montes, nascetur ridiculus mus.
Donec quam felis, ultricies nec
```

초기도 돌리겠다.
  margin: initial; 

의도가 더 명확함.
  margin : unset;

unset의 숨어있는 기능
  - margin 속성이 상속을 지원하는 속성이라면 inherit로 적용
  - 상속이 지원되지 않는다면 initial이 자동으로 알아서 판단해 적용된다.