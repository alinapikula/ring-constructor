import "./UserAcc.scss"
import { Link } from "react-router-dom";
import axios from 'axios';
import { useState, useEffect } from 'react';


const UserAcc = () => {

const [rowList, setRowList] = useState([])

useEffect(()=>{
    axios.get("http://localhost:8080/row-list")
    .then((response) =>{
        setRowList(response.data)
    })
    .catch(console.log("wooopsy"))
},[])
console.log(rowList);


if (!rowList) {
return (
    <h1>Loading...</h1>
) 
}
return (
    <div className="test" >
        
        <div className="mait__container">
            <h3 className="mait__title">THIS IS BACKEND TEST PAGE</h3>
            
            <ul>
               {rowList.map(item =>
            <li className='inv-list__item' key={item.row_id} >
              <img className="test__img" src={item.row_img}/>  
            </li>
             )}
            </ul>
            <Link to={"/"}><button className="mait__btn">BACK TO MAIN</button></Link>
        </div>
        
    </div>
);
}

export default UserAcc;