import "./Result.scss"
// import { ITEMS, initState } from "../../assets/initData";

function Result({state}) {

  console.log(state);
  return (
    <div >
            <div className="result">
            <div className="result__container result__container--hidden">
              <h1 className="result__placeholder">Your new amazing style awaits here</h1>
              {/* Three images are going here */}
            </div>
            <button className="result__btn result__btn--save">SAVE</button>
            <button className="result__btn result__btn--clear">CLEAR</button> 
            </div>

            <button className="result__btn result__btn--out">GENERATE</button>
    </div>
  );
}

export default Result;