import "./Result.scss"
import { ITEMS, initState } from "../../assets/initData";

function Result() {

  console.log(initState);
  return (
    <div className="result">
            <div className="result__container">
              <h1 className="result__placeholder">Your new amazing style awaits here</h1>
              {/* Three images are going here */}
            </div>
            <button className="result__btn result__btn--save">SAVE</button>
            <button className="result__btn result__btn--clear">CLEAR</button> 
    </div>
  );
}

export default Result;