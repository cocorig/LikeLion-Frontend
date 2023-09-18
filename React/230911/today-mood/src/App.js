import MenuList from "./components/MenuList/MenuList";
import DisplayMood from "./components/DisplayMood/DisplayMood";
import './App.css';
import { useState } from "react";

function App() {

  const [currentMood , setCurrentMood] = useState('');
  return (
    <div className="wrap">
      <h1>오늘의 기분을 선택해주세요 🫣</h1>
      <MenuList setCurrentMood = {setCurrentMood} />
      <DisplayMood mood = {currentMood}/>
    </div>
  );
}
export default App;
