import "./Result.scss"

function Result() {
  return (
    <div className="result">
            <div className="result__container"></div>
            <button className="result__btn result__btn--save">SAVE</button>
            <button className="result__btn result__btn--clear">CLEAR</button> 
    </div>
  );
}

export default Result;