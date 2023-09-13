import React from 'react';

function Button(props) {
  console.log(props);
  const { text, onClick } = props;
  return (
    <button onClick={onClick}>{text}</button>
  );
}

function Modal(props) {

  const { title, content, onClose } = props;
  console.log(onClose); // handleCloseModal()를 전달받음 , setIsModalOpen(false)로 바꿔줄 수 있는 함수기 들어옴
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>   
      {/*  props로 받은  onClose함수를 버튼 컴포넌트에 전해준다*/}
      <Button text="Close" onClick={onClose} /> 
    </div>
  );
}

export default Modal;