import { useNavigate } from 'react-router-dom'
import silogo from '../silogo2.png'
import lightning from '../lightning.png'
import './Cards.css'

let SIlogo =()=>{
    let navigate = useNavigate();
    return(
        <div onClick={()=>{navigate('/')}}>
        <img className='lightning' src={lightning}></img>
        <img className='silogo' src ={silogo}></img>
        </div>
    )
}

export default SIlogo