const dropTarget = document.querySelector('.drop-target');
const dragItems = document.querySelectorAll('.drag-item');

dragItems.forEach((item) => {
  item.addEventListener('dragstart', () => {
    setTimeout(() => {
      item.classList.add('dragging')
    },0)

  })
  item.addEventListener('dragend', () => item.classList.remove('dragging'))
})
// 이 맥락에서 최소한의 지연으로 'setTimeout'을 사용하는 것은 클래스 변경 사항을 적용하기 전에 브라우저가 진행 중인 렌더링 작업을 처리할 수 있도록 하여 드래그 앤 드롭 상호 작용 중에 보다 부드러운 시각적 경험을 보장하는 데 도움이 되는 기술임.

function handleDragOver(e) {
  e.preventDefault();
  const draggingItem = dropTarget.querySelector('.dragging');
  const notDraggingItems = Array.from(dropTarget.querySelectorAll('.drag-item:not(.dragging)'));

  const nextItem = notDraggingItems.find((item) => {   
    /* 
      clientY : 뷰포트 내 마우스 y좌표
      offsetTop: 뷰포트에서 요소까지의 y좌표
      offsetHeight: 요소의 높이(border 포함)
    */
    return e.clientY <= item.offsetTop + item.offsetHeight / 2;
    // console.log('clientY: ', e.clientY, '/ offsetTop: ', item.offsetTop, '/ offsetHeight', item.offsetHeight)
  })
  // console.log(nextItem);
  dropTarget.insertBefore(draggingItem, nextItem)
}

dropTarget.addEventListener('dragover', handleDragOver)
dropTarget.addEventListener('dragenter', (e)=> e.preventDefault())