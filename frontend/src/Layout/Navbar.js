import React,{useState,useEffect,useContext} from 'react'
import NavItem from './NavItem'
import RoundButton from '../Components/RoundButton'
import {FaChevronDown,FaChevronUp,FaDiceFive,FaUser} from 'react-icons/fa'
import './nav.css'
import Login from '../Components/Login'
import {context} from '../Components/Context'
import {OverlayTrigger,Popover,Spinner} from 'react-bootstrap'
import axios from 'axios'
import {Link,useHistory, useLocation} from 'react-router-dom'
import { LIVE_URL } from '../utils/url'
const durl="http://localhost:5000/"
const purl=LIVE_URL
const Options = ({set,isTeacher})=>{
    return(<div style={{display:"flex",flexDirection:"column",top:"60px",right:"10px",position:"absolute",width:"180px",backgroundColor:"white",boxShadow:"0px 0px 10px rgba(0,0,0,0.3)"}}>
        {isTeacher?<Link to="/Admin"><div id="hov" style={{color:'black',cursor:"pointer",width:'100%',padding:"5px",textAlign:"center",textDecoration:"none"}}>Add a course</div></Link>:null}        
        <a href="/meeting"><div id="hov" style={{color:'black',cursor:"pointer",width:'100%',padding:"5px",textAlign:"center"}}>Meetings</div></a>
        <div id="hov" onClick={()=>{
            axios.get(purl+'auth/logout',{withCredentials:true}).then((res)=>{
                set(false)
            }).catch(err=>{
                console.log(err)
            })
        }} style={{cursor:"pointer",width:'100%',padding:"5px",textAlign:"center"}}>Logout</div>
    {/* <Link to="/meeting"><div id="hov" style={{color:'black',cursor:"pointer",width:'100%',padding:"5px",textAlign:"center"}}>Meetings</div></Link> */}
    </div>

    
    )
}

const Loader = ()=>{
    return (<div style={{top:"0",bottom:"0",right:"0",left:"0",position:"fixed",backgroundColor:"white",zIndex:"9",display:'flex',justifyContent:'center',alignItems:"center"}}>
            <Spinner animation="border"/>
    </div>)
}

export default function Navbar() {
    const history = useHistory()
    const location = useLocation()
    const obj=useContext(context)
    const [Select,setSelect]=useState({
        Home:true,
        overlay:false
    })
    const [chevClick,setClick]=useState(true)
    const [show,setshow]=useState(true)
    const [log,setlog]=useState(false)
    useEffect(()=>{
        if(localStorage.getItem("selected")!="null"){
            setSelect({
                [localStorage.getItem("selected")]:true
            })
        }
    },[])   
    const handleClose=()=>{
        setSelect({...Select,overlay:false})
    }
    return (
        <div style={{overflow:"hidden"}}>
            {obj.isLogged===""?<Loader/>:null}
        <div id="navMain" style={{display:'flex',flexDirection:"row",top:'0',right:"0",left:"0",width:"100%",height:"60px",padding:"5px",paddingLeft:"15px",justifyContent:'space-between',backgroundColor:"white",alignItems:"center",borderBottom:"solid 1px gray"}}>
            {/* <img onClick={()=>history.push('/')} src="https://reptro.xoothemes.com/wp-content/uploads/2018/05/cropped-logo-3.png" style={{width:"120px",marginLeft:"20px",cursor:"pointer"}}/>   */}
            <div style={{fontWeight:"bold",color:"#242323",fontSize:"20px",fontFamily:"sans-serif",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}}>Gveducations</div>
            <div id="navb" style={{display:"flex",width:"250px",justifyContent:"space-between",marginRight:"35px",alignItems:"center"}}>
            <Link to="/" style={{textDecoration:"none"}}><NavItem text="Home" select={location.pathname==="/"?true:false} set={setSelect}/></Link>
                {/* <NavItem text="Courses" select={Select['Courses']} set={setSelect}/> */}
                <Link to="/Contactus" style={{textDecoration:"none"}}><NavItem text="Contact" select={location.pathname==="/Contactus"?true:false} set={setSelect}/></Link>
                <div style={{position:"relative"}}>
                {obj.isLogged?<OverlayTrigger trigger="click" placement="bottom" show={Select.overlay}   overlay={<Options  set={obj.setLog} isTeacher={obj.isTeacher}/>}><FaUser id="idd"/></OverlayTrigger>:<RoundButton func={()=>setlog(true)} text="Login" width="80px" height="35px" padding="5px" backgroundColor="purple" fontSize="15px" fontWeight="700" fontFamily="sans-serif" />}
                </div>
            </div> 
            
            {chevClick?<FaChevronDown id="chevDown" onClick={(e)=>{
                setshow(false)
                
                try{
                    document.getElementById('chevDown').classList.add('chevDown')
                }catch(err){
                    console.log(err)
                }   try{
                    document.getElementById('chevDown').addEventListener('animationend',()=>{
                        document.getElementById('chevDown').classList.remove('chevDown')
                        setClick(false)
                    })
                }
                catch(err){
                    console.log(err)
                }
              
                
              
            }} style={{marginRight:"15px"}}/>:<FaChevronUp id="chevUp" onClick={()=>{
                setshow(true)
                try{
                document.getElementById('chevUp').classList.add('chevUp')
                }
                catch(err){
                    console.log(err)
                }
                try{
                document.getElementById('chevUp').addEventListener('animationend',()=>{
                    document.getElementById('chevUp').classList.remove('chevUp')
                    setClick(true)
                })
            }
            
            catch(error){
                console.log(error)
            }
            }
                } style={{marginRight:"15px"}}/>}

           
        </div>
        {!show?<div style={{width:"100%",display:"flex",flexDirection:"column"}}>
                
                <Link to="/"><div style={{width:"100%",padding:"15px",height:"40px",borderTop:"solid rgba(0,0,0,0.25) 1px",display:"flex",flexDirection:"row",alignItems:"center"}}>Home</div></Link>
                <Link to="/Contactus" style={{textDecoration:"none"}}><div style={{width:"100%",padding:"15px",height:"40px",borderTop:"solid rgba(0,0,0,0.25) 1px",borderBottom:"solid rgba(0,0,0,0.25) 1px",display:"flex",flexDirection:"row",alignItems:"center"}}>Contact us</div></Link> 
                {obj.isLogged?
                <a href={LIVE_URL+"meeting"}><div id="hov" style={{color:'black',cursor:"pointer",width:'100%',padding:"15px",borderBottom:"solid rgba(0,0,0,0.25) 1px"}}>Meetings</div></a>:null}
                {obj.isLogged? <div id="hov" onClick={()=>{
            axios.get(' /auth/logout',{withCredentials:true}).then((res)=>{
                obj.setLog(false)
                setlog(false)
            }).catch(err=>{
                console.log(err)
            })
        }} style={{cursor:"pointer",width:'100%',padding:"15px"}}>Logout</div>:<RoundButton func={()=>{
                    setshow(true)
                    try{
                        document.getElementById('chevUp').classList.add('chevUp')
                        }
                        catch(err){
                            console.log(err)
                        }
                        try{
                        document.getElementById('chevUp').addEventListener('animationend',()=>{
                            document.getElementById('chevUp').classList.remove('chevUp')
                            setClick(true)
                        })}  
                        catch(error){
                            console.log(error)
                        }
                  
                    setlog(true)}} text="Login" width="80px" height="35px" padding="5px" backgroundColor="purple" fontSize="15px" fontWeight="700" fontFamily="sans-serif" margin="10px" />}
            </div>:null}
            {log?<Login set={setlog} />:null}
        </div>
    )
}
