import React,{useState,useContext} from 'react'
import RoundButton from '../Components/RoundButton'
import './nav.css'
import Signup from '../Components/Signup'
import {context} from '../Components/Context'

export default function Header() {
    const obj = useContext(context)
    const [shows,sets]=useState(false)
    const [teach,setteach]=useState(false)
    return (
        <div style={{width:"100%",display:'flex',flexDirection:"row",height:"70vh"}}>
            <div id="h1" style={{width:"50%",height:"100%",backgroundImage:"linear-gradient(to left,purple 30%,purple)",display:"flex",justifyContent:"center",alignItems:"center"}}>
                {!obj.isLogged?<div style={{maxWidth:"350px",height:"300px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                    <RoundButton func={()=>{
                        setteach(false)
                        sets(!shows)}} marginBottom="35px" width="290px" height="60px" text="Signup as Student" backgroundColor="orange" fontSize="23px" fontFamily="sans-serif"/>
                        
                        <RoundButton func={()=>{
                        setteach(true)
                        sets(!shows)}} width="290px" height="60px" text="Signup as Teacher" backgroundColor="orange" fontSize="23px" fontFamily="sans-serif"/>
                </div>:<div style={{textAlign:"center"}}><h1 style={{color:"white"}}>Welcome</h1><h1 style={{color:"white"}}>{obj.user.name}!</h1></div>}
            </div>
            <div id="h2" style={{width:"50%",height:"100%",background:"url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6d-LcljQWT0QVqXlX0to_m4bbm6YRKrCHGg&usqp=CAU) center no-repeat",backgroundSize:"cover"}}>

            </div>
            {shows?<Signup set={sets} teach={teach}/>:null}
        </div>
    )
}
