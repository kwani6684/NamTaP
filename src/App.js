import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import Cards from './components/Cards';
import React, { useState } from 'react';
import data from './data';
import sb from'./audio/sb.mp3'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import About from './components/About';

function App() {
  let navigate = useNavigate();
  let [category,setCategory] = useState(data);

  return (
    <>
    <div className="bgm">
         <h3>Summer Belle</h3>
   <audio src={sb} type="audio/mp3" autoPlay={true} controls={true}></audio>
         </div>
    <Routes>
      <Route path='/album' element={<div>hi</div>}/>
      <Route path="/" element={
         <div className = "main-color">
         
         <div className="main-background">
    <div className="main-container">
      <div className="main-text" >
        <p className="textani" onClick={()=>{navigate('/')}}>남산타워<br/>피뢰침</p>
        <Button onClick={()=>{navigate('/detail')}} className="btn-black" variant="secondary">뭔지 궁금해?</Button>
      </div>
      {/* <img src="img/namsan.jpg" className="main-iphone"/> */}
    </div>
</div>
        <Outlet></Outlet>
   </div>
      }>
        <Route path="/" element={<Main/>}></Route>
        <Route path='/detail' element={<About/>}/>
        
        
      </Route>
    
  
</Routes>
</>

  );
}
let Main = ()=>{
  let navigate = useNavigate();
  let [category,setCategory] = useState(data);
  return(
    
    <div>
<div>
<div class="portfolio">
  <h4 class="category-title">What we DO</h4>
  <div class="portfolio-container">
 {data.map((a)=>{
  return(
    
    <Cards name={a.bg} content ={a.content} ></Cards>
    
  )
 })
}
</div>
  </div>
</div>
</div>

  )
}

export default App;
