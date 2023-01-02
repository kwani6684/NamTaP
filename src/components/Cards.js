import React from 'react';
import { Routes,Route, useNavigate } from 'react-router-dom';
import hi from '../1.jpg' 
import './Cards.css';
let Cards = (props)=>{
    let navigate =useNavigate();
    return(
    <>
    <div className="portfolio-item1" onClick={()=>{navigate(`/${props.name}`)}}
     style={{backgroundImage:`linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${hi})`}}>
        <div class="white-box"></div> 
      <div className="portfolio-text">
      <h4 className='portfolio-title'>{props.name}</h4>
      
      <p>{props.content}</p>
      </div>
    </div>
    <Routes>
        <Route path = "/album" element={<div>hi</div>}></Route>
    </Routes>
    </>

      
    )
}

export default Cards;