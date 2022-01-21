import React,{useState,useContext} from 'react'
import CustumInput from './CustumInput'
import {FaGoogle,FaFacebookF,FaLinkedinIn} from 'react-icons/fa'
import {AiOutlineClose} from 'react-icons/ai'
import RoundButton from './RoundButton'
import axios from 'axios'
import {context} from './Context'
import Swal from 'sweetalert2'
import { LIVE_URL } from '../utils/url'

const durl="http://localhost:5000/"
const purl=LIVE_URL

export default function Login({set}) {
    const [email,setEmail]=useState("")
    const [password,setPass]=useState("")
    const obj =  useContext(context)

    function sub(){
        
        //console.log({email:email,password:password})
        axios.post(purl+'auth/login',{email:email,password:password},{withCredentials:true}).then((res)=>{
            //console.log("Login",res)
            window.location.reload()
        }).catch((error)=>{
            Swal.fire({
                text:error?.response?.data?.message||"Something Went Wrong!",
                icon:"error",
                timer:2000
            })
        })
    }

    return (
        <div  style={{zIndex:"10",top:'0',bottom:'0',left:'0',right:'0',position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.35)"}}>
            <div onClick={()=>set(false)} style={{zIndex:"1",top:'0',bottom:'0',left:'0',right:'0',position:"absolute",}}></div>
            
            
            <div style={{zIndex:"3",width:"300px",backgroundColor:"white",borderRadius:"10px",padding:"15px",overflow:"hidden"}}>
                <div style={{width:"100%",display:'flex',flexDirection:'row',justifyContent:"flex-end"}}>
                        <AiOutlineClose  onClick={()=>set(false)} fontSize="20px" />
                </div>
                <CustumInput place="Email" type="text" chg={setEmail} val={email}  />
                <CustumInput place="Password" type="password" chg={setPass} val={password} />
                <RoundButton func={sub} width="100%" height="35px" text="Login" backgroundColor="purple" marginTop="10px"/>
                {/* <div style={{width:"100%",display:'flex',flexDirection:"row",justifyContent:'space-around',alignItems:"center",marginTop:"20px"}}>
                    <FaLinkedinIn fontSize="25px" />
                    <FaGoogle fontSize="25px"/>
                    <FaFacebookF fontSize="25px"/>
                </div> */}
            </div>
            
        </div>
    )
}
