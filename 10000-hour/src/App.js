import Header  from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Modal from "./components/modal/Modal";
import { useState } from "react";

function App() {

  const [modalShow , setModalShow] = useState(false)
  return (
    <div id="app">
      <Header />
      {/*main에 버튼을 눌러야 모달이 켜지게 하기위헤 프롭으로 전해줌 */}
      <Main setModalShow = {setModalShow} />
      <Footer />
      {modalShow && <Modal  setModalShow={setModalShow} />} 
  </div>
  );
}

export default App;
