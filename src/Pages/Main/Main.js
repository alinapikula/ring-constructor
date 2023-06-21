import Result from "../../components/ResultImage/Result";
import DnD from "../../components/DnD/DnD";
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";
import "./Main.scss"

function Main() {

  const [state, setState] = useState({ 
  ["row1"]: [],
  ["row2"]: [],
  ["row3"]: []})
  
  return (
    <div className="main">
    <DnD 
        setState={setState}
        state = {state}/>
    {/* <button> generate</button> */}
    <Result state = {state}/>
    </div>
  );
}

export default Main;