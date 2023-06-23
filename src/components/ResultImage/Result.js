import "./Result.scss"
import { res_pos1, res_pos2, res_pos3 } from "../../assets/initData";
import { useState } from "react";
import Shank from "../../assets/rows-dnd/bottom.png"

function Result({state}) {

   const [gen, setGen] = useState(false)
  
  const [resImg, setResImg] = useState([])

const containingNumber = (str) => {
 return str.match(/\d/g);
}

const handleGenerate = (e) =>{
  if (state.row1.length === 0 ||
      state.row2.length === 0 ||
      state.row3.length === 0 )
    return

const stateRow1 = containingNumber(state.row1[0].content)
const stateRow2 = containingNumber(state.row2[0].content)
const stateRow3 = containingNumber(state.row3[0].content)
let img1
let img2
let img3
for (let i = 0; i < res_pos1.length; i++) {
  if (stateRow1 == i + 1){
     img1 = res_pos1[i].content;
  console.log( img1);
  }
}
for (let i = 0; i < res_pos2.length; i++) {
  if (stateRow2 == i + 1){
    img2 = res_pos2[i].content;
   console.log( img2);
  }
}
for (let i = 0; i < res_pos3.length; i++) {
  if (stateRow3 == i + 1){
    img3= res_pos3[i].content;
   console.log( img3);
  }
}

setGen(true)
  // return <div>
  
  //   <img src=""/>
  //   <img src=""/>
  //   <img src=""/>
  //   <img src=""/>
  // </div>
setResImg([img1, img2, img3])

}

if (gen){
  
 return (

    <div >
            <div className="result">
            <div className="result__container result__container--rslt"  >
              <img className="result__img result__img--pos1" src={resImg[0]}/>
              <img className="result__img result__img--pos2" src={resImg[1]}/>
              <img className="result__img result__img--pos3" src={resImg[2]}/>
              <img className="result__img result__img--shank" src={Shank}/> 
            </div>
            <button className="result__btn result__btn--save">SAVE</button>
            <button className="result__btn result__btn--clear">CLEAR</button> 
            </div>

            <button className="result__btn result__btn--out" onClick={(e)=>{handleGenerate(e)}} >GENERATE</button>
    </div>
  );
}
            
  return (

    <div >
            <div className="result">
            <div className="result__container  result__container--plhldr"  >
              <h1 className="result__placeholder">Your new amazing style awaits here</h1>
            </div>
            <button className="result__btn result__btn--save">SAVE</button>
            <button className="result__btn result__btn--clear">CLEAR</button> 
            </div>

            <button className="result__btn result__btn--out" onClick={(e)=>{handleGenerate(e)}} >GENERATE</button>
    </div>
  );
}

export default Result;