# ☄️  반응형 컨텐츠 만들기

## 1. 이미지 포맷

### 대표적은 4가지 이미지 포멧 종류


#### - GIF(Graphics Interchange Format)

장점 - 256색의 컬러만 표현 가능, 투명은 표현 가능,용량이 적게 듬,  애니메이션 처리가 가능,움짤
단점 -  선명하진 않다. 그림자 표현도 불가능, 

#### - JPG/JPEG (Joint Photographic Expert Group image)

디지털 카메라로 찍은 사진을 컴퓨터로 옮겼을 때 주로 사용
장점 - 매우 화소가 높고, 용량이 적다.
단점 - 투명처리가 불가능


#### - PNG (Portable Network Graphics) 

장점 - 왠만한 컬러는 모두 표현 가능,투명 영역을 처리 가능
단점 -   용량이 큼

#### - SVG (Scalable Vector Graphics)

이미지를 그리는 언어.
장점 - 벡터 이미지는 손실이나 품질 저하 없이 모든 크기에서 렌더링이 가능


### 최신에 나온 이미지 포맷 종류

#### - WebP (Web Picture Format)

화질 높은 움짤..

장점 - 압축률이 좋다고 소문난 JPEG 이미지에 비해 무려 용량은 70% 수준으로 낮지만 더 뛰어난 색상을 지원하는 포맷이다.
그럼에도 불구하고 PNG 처럼 투명도 표현 가능하며, GIF 처럼 애니메이션 표현도 가능한 만능 포맷이다.

#### - AVIF (AV1 Image File Format) 

장점 - WebP 처럼 뛰어난 색상표현, 애니메이션 지원, 투명도 표현 모두 가능하며 JPEG 이미지의 50% 수준인 용량을 자랑하는 차세대 이미지 포맷.
단점 - 아직 지원하지 않는 브라우저가 많음에 주의해야함.


--------

## 2. 이미지 최적화

#### 이미지 압축 툴 👇 
[kraken.io](https://kraken.io/web-interface)
[TinyPng](https://tinyjpg.com/)
> 나중에 포트폴리오 이미지 용량은 100KB 이내로 설정하자.

-----

## 3. 반응형 컨텐츠

### 3-1 반응형 이미지 만들기

1. width: 100%

  - height는 auto(기본값)은 자동으로 조절된다.
  - 콘테이너 요소에 크기만큼 다 차지한다.

2. max-width: 100%

  - 원본 사이즈보다 커지진 않는다.
  -  원본사이즈를 지키면서 이미지가 깨지면 안될때 사용


### 3-2 반응형 백그라운드 이미지


#### background-size: px          
—> 이미지의 크기를 고정합니다.

#### background-size: auto       
—> 이미지의 종 횡비를 통해 자동으로 다른 축의 크기를 결정합니다.

#### background-size: %           
—> %를 사용하면 컨테이너의 너비에 비례하도록 사이즈를 조절할 수 있습니다.

#### background-size: contain  
—> 컨테이너 전체를 덮지만 이미지를 자르지 않게 유지합니다.
-> 이미지를 잘라지않게 부모의 컨테이너만큼 꽉차게 나온다, 반응형으로 조절,이미지가 다 출력(빈 공간이 생김)
#### background-size: cover     
—> 컨테이너 전체를 완전히 덮습니다.
-> 반응형 백그라운드 이미지로 변경하려면 화면의 중심축을 뷰포트의 중심축으로 설정하면 반응형 백그라운드가 된다.

### 단축속성

(중요도가 떨어지는 속성은 나중에 적음)
                    이미지        position / 사이즈 지정   반복여부
 -> background: url(./cloud.jpeg) 50% 50% / cover no-repeat; 


#### 👀 언제 contain 사용하면 좋을까??

잘리지 않고 다 나와야하는 로고, 빈 공간은 background-color로 채울 수 있다.


### 3-3 반응형 동영상

- 코덱 (codec):  촬영을 통해 얻은 원본 영상을 편집하여 압축한 결과물을 의미한다.  
코덱에 따라 지원하는 브러유저가 다 다르기 때문에 
- 포맷 (format) :포맷은 코덱을 담아 재생 가능한 플레이어에 전달되는 컨테이너의 역할을 한다. 주로 (mp4) 사용

#### 1. video 태그로 만들기

```html
<!-- -  autoplay여도 사운드가 있으면 무음처리(muted)를 해야 웹페이지를 열었을때 자동으로 재생된다 -->
<video autoplay  loop muted src="video.mp4"></video>
```
```css
 video{
      /* width: 100% */
      /* 뷰포트기준으로 차지하게 */
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50% , -50%);
      /* 높이를 맞춰주면 종회비에 따라 너비는 자동으로 맞춰진다. */
      min-height: 100%;
      /* hight:100% */
      opacity: 0.5;
      /* 사용자로부터 마우스 이벤트를 작동하지 않게 할수있다. */
      pointer-events: none;
    }

```

#### 2. youtube 동영상으로 만들기 (더 자주 사용)

```html

  <article>

    <iframe class="video-play" width="560" height="315" src="https://www.youtube.com/embed/HYzjzh03egU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen>
    </iframe>

  </article>
```

```css
 article{
      position: relative;
      /* 부모 요소의 너비에 비례하게 적용, body의 너비가 980px이면 자식요소의  padding-top: 50%;는 490px과 같다*/
      /* padding-top, padding-bottom 속성을 아용해서 높이값을 줄 수 있다. */
      /* 56.25%;나온 이유?  높이 / 넓이 * 100 */
      /* 9 / 16 * 100 =  56.25 */
      padding-top:  56.25%;
      /* 종횡비를 이용하는 방법도 있다. */
      /* 뷰포트 기쥰으로 설정하는 방법 */
      /* height: 56.25vw; */
      /* aspect-ratio: 16/9; */
    }
    .video-play{
      position: absolute;
      top: 0;
      left: 0;
      /* 부모태그 크기만큼 커지게 된다. */
      width: 100%;
      height: 100%;
    }
```
1. padding-top, padding-bottom 속성을 아용해서 높이값을 주는 방법

유튜브나 영상은 16:9 비율을 채택하고 있기 때문에  9 / 16 * 100 = 56.25 으로 설정한다.
padding-top, padding-bottom 속성의 % 값은 부모 요소의 너비에 비례하게 적용할 수 있어 반응형으로 동영상 사이즈를 조절할수 있다.


2. 뷰포트 기준으로 설정하는 방법

height: 56.25vw로 설정해 article의 높이를 지정

3. 종횡비를 이용하는 방법

 aspect-ratio: 16/9;