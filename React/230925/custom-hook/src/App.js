import InputComponent from "./components/InputComponents";
import SomethingComponent from "./components/SomethingComponents";
import useMouseLocation from "./Hooks/useMouseLocation";
import useScroll from "./Hooks/useScroll";

function App() {

  // console.log(useMouseLocation());
  // const mouseLocation  = useMouseLocation();
  const isBottom =  useScroll();
  console.log(isBottom);
  return (
    <div style={{height : 100}}>
{/*    
     <InputComponent/>
     <SomethingComponent/> */}
     {/* <div style={{height : 3000 , width : 100 , 
        backgroundColor: mouseLocation.x > 100 ? "coral" : 'skyblue'}}></div> */}

    <div style={{height : 1200 , width : 100 , 
        backgroundColor: "coral" }}></div>
    </div>
  );
}
export default App;
