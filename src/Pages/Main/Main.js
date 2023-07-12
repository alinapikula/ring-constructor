import Result from "../../components/ResultImage/Result";
import DnD from "../../components/DnD/DnD";
import { useState, useEffect } from "react";
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
    <Result state = {state}/>
    </div>
  );
}

export default Main;