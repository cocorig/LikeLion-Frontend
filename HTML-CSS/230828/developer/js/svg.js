// dom에서 path 찾기
const path = document.querySelector('#path');
const openBtn =  document.querySelector('.btn-open');
// path의 전체 길이 구하기 
const pathLength = path.getTotalLength(); // 2507
// console.log(pathLength);

// dash의 길이와 공백
// path.style.strokeDasharray = 1000 + " " + 1000;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서 부터 그릴지 , strokeDashoffse값을 1000에서 0이 되게끔 조절을 해쥼 그 조절을 스크롤로 해줌
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight; //5000

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight; //834
  // console.log(clientHeight);
  // 스크롤의 위치 => % 0 - 1 의 값을 가짐 ,  일부/전체 * 100
  // 전체 스크롤 영역 높이에서 뷰포트 크기만큼을 빼줌.
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight) // scrollTop / 4166

  const drawLength = pathLength * scrollPercentage;

  // pathLength -> 0
  path.style.strokeDashoffset = pathLength - drawLength;

  // button opacity 조절
  openBtn.style.opacity = scrollPercentage;
  if(scrollPercentage > 0.8){
    openBtn.disabled = false;
  }else{
    openBtn.disabled =  true;
  }
}
window.addEventListener('scroll', scrollHandler)




