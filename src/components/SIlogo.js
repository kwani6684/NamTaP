import { useNavigate } from 'react-router-dom'
import silogo from '../silogo2.png'
import lightning from '../lightning.png'
import silogoHuman from '../silogo-human.png'
import './Cards.css'
import { useState } from 'react'

let SIlogo =()=>{
    let navigate = useNavigate();
    let [siLogos,setSiLogos] = useState(silogo);
    let [changeLogo,setChangeLogo] = useState(false);

    return(
        <div onClick={()=>{navigate('/')}}
            onMouseOver={()=>{setSiLogos(silogoHuman)}}
            onMouseLeave={()=>{setSiLogos(silogo)}}>
        <img className='lightning' src={lightning}></img>
        <img  className='silogo' src ={siLogos}></img>
        </div>
    )
}

export default SIlogo