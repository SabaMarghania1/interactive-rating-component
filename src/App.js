import Rating from "./components/Rating/Rating";
import Thanks from "./components/Thanks/Thanks";
import {useState} from "react";
function App() {
  const [select, setSelect] = useState(-1);
  const [isSelected, setIsSelected] = useState(false);

  return (
    <div className="container">
      <Rating
        select={select}
        setSelect={setSelect}
        isSelected={isSelected}
        setIsSelected={setIsSelected}
      />
      <Thanks />
    </div>
  );
}

export default App;
