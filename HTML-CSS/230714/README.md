## div의 너비는 어떻게 정의됐을까?

직계부모가 제공해주는 컨텐츠 영역의 크기만큼 정의가 된다 == 컨테이닝블럭(containing block)의 크기만큼 div가 가득찬다.
/* type selector,*/
div{
    background: pink;
    width: 100%;
    margin-left: 50px;
}
width(속성 property) :  value;

width가 지정되지않았을때의 초깃값(initial value == 미리 셋팅된 값 )은 ? auto;
부모가 제공한 너비만큼 가득찬개념이다.

여기에 있던 margin,padding이 알아서 계산을 해준다.

width: 100% 와 차이가있다.-> margin,padding,border를 고려하지 않는다.->


----

꾸미는것보다 중요한것은 레이아웃이다. 먼저 html로 레이아웃을 잡고 그 다음에 css로 색을 입히자.

--

heigth는 내용물에 의해 높이가 결정이되니까  고정으로 해주는 일이 거의 없다. -> heigth는 자동으로 auto

css에서 제일 먼저 해줘야하는건 초기화작업이다. 


--


상속은 모든 프로퍼티에 적용되는것이 아니다.
몇몇 propertie들만 상속이 된다. 


background-color는 상속이 되는게 아니다!! 원래 배경이 투명색이라서 그렇게 보이는 것/


inherit => 내가 강제로 상속받겠다. 브라우저에 제공된거 안받고
브라우저야 뭐하냐 자동으로 좀 해주라 부탁~
=> font-size: unset;
어 이거 상속되는 애네? inherit
=> margin: unset;
어 얘는 상속 안되는데? initial
