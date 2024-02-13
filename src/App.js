import Rating from "./components/Rating/Rating";
import {useState} from "react";
function App() {
  const [select, setSelect] = useState(-1);
  return (
    <div className="container">
      <Rating select={select} setSelect={setSelect} />
    </div>
  );
}

export default App;
