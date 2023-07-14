import "./Result.scss"
import { res_pos1, res_pos2, res_pos3 } from "../../assets/initData";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shank from "../../assets/rows-dnd/bottom.png"
import axios from "axios";

function Result({state}) {

const [gen, setGen] = useState(false)
const [resImg, setResImg] = useState([])
const [row1, row2, row3] = Object.values(state)
let img1
let img2
let img3
useEffect((res, err)=>{
  if (row1.length === 0) return
  axios.get(`http://localhost:8080/pos1/${row1[0].row_id}`)
  .then ((res)=>{img1 = res.data.img})
})
useEffect((res, err)=>{
  if (row2.length === 0) return
  axios.get(`http://localhost:8080/pos2/${row2[0].row_id}`)
  .then ((res)=>{console.log(img2 = res.data.img);})
})
useEffect((res, err)=>{
  if (row3.length === 0) return
  axios.get(`http://localhost:8080/pos3/${row3[0].row_id}`)
  .then ((res)=>{console.log(img3 = res.data.img);})
})




// const containingNumber = (str) => {
//  return str.match(/\d/g);
// }

const handleGenerate = (e) =>{
  if (row1.length === 0 ||
      row2.length === 0 ||
      row3.length === 0 )
    return

// const stateRow1 = containingNumber(state.row1[0].content)
// const stateRow2 = containingNumber(state.row2[0].content)
// const stateRow3 = containingNumber(state.row3[0].content)

// for (let i = 0; i < res_pos1.length; i++) {
//   if (stateRow1 == i + 1){
//      img1 = res_pos1[i].content;
//   console.log( img1);
//   }
// }
// for (let i = 0; i < res_pos2.length; i++) {
//   if (stateRow2 == i + 1){
//     img2 = res_pos2[i].content;
//    console.log( img2);
//   }
// }
// for (let i = 0; i < res_pos3.length; i++) {
//   if (stateRow3 == i + 1){
//     img3= res_pos3[i].content;
//    console.log( img3);
//   }
// }

setGen(true)
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
            <Link className="result__btn--link" to={"/maitenance"}><button className="result__btn result__btn--save">SAVE</button></Link>
            <button className="result__btn result__btn--clear" onClick={()=>{setGen(false)}}>CLEAR</button> 
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