import React, { useState } from 'react';
import Modal from './Components/Modal';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  console.log(isModalOpen);

  function handleOpenModal() {

    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
  }

  return (
    <div>
      <h1>Welcome to my app!</h1>
      <button onClick={handleOpenModal}>Open modal</button>
      {/* 상태가 true면 Modal컴포넌트를 보여준다 */}
      {isModalOpen && (
        <Modal
          title="My modal"
          content="This is my modal."
          // isModalOpen를 false로 바꿔줄 수 있는 함수를 Modal컴포넌트의 props로 넘겨준다.
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}

export default App;