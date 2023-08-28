const modal =  document.querySelector('.modal');
const btnOpen  = document.querySelector('.btn-open');
const btnClose = document.querySelector('.btn-close');
const dim =  document.querySelector('.dim');

const focusableEl = modal.querySelectorAll('a , button, input');

const firstEl =  focusableEl[0];
const lastEl = focusableEl[focusableEl.length - 1];
console.log(firstEl , lastEl);

function openModal(){
  modal.classList.toggle('active');
  document.documentElement.style.overflow = 'hidden';

  // firstEl.focus();
}

function closeModal(){
  modal.classList.toggle('active');
  document.documentElement.style.overflow = 'auto';
}

// 포커스 이동 shiftKey <-> Tab  , 점근성 측면 고려
function handleTab(e) {
  // e.key : 누른 key 정보를 반환
  // console.log(e.key);
  
  // shift 키를 누른 정보를 boolean 값으로 반환
  // console.log(e.shiftKey);

  // activeElement : 현재 포커스를 받고 있는 요소 반환
  const activeEl = document.activeElement;
  if (e.key === 'Tab') {
    if (e.shiftKey) {
      // tab + shift 같이 눌렀을 때
      console.log('tab+shift')
      if (activeEl === firstEl) {
        e.preventDefault();
        lastEl.focus();
      }
    } else {
      // tab 민 눌렀을 때 -> 다음 동작으로 간다, 
      if(activeEl === lastEl){
        e.preventDefault(); // 한 번 막아줘야지 원래 기능을 사용하지 않겠다,
        firstEl.focus();
        // tab 기능을 수행
      }
    }
  }
  
}

btnOpen.addEventListener('click', openModal)
btnClose.addEventListener('click', closeModal)
dim.addEventListener('click', closeModal)

firstEl.addEventListener('keydown', handleTab)
lastEl.addEventListener('keydown', handleTab)



window.addEventListener('keydown' , (e)=>{
  //  포함여부를 boolean값으로 반환
  console.log(modal.classList.contains('active')); //true 
  console.log(modal.classList.contains('m')); //false

  if(modal.classList.contains('active') && e.key === 'Escape'){
    closeModal();
  }
})

// keydown 

// - 사용자가 키보드의 키를 눌렀을 때 발생합니다.

// keyup 

// - 사용자가 키보드의 키를 눌렀다가 떼었을 때 발생합니다.




