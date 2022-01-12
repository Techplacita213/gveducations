import React from 'react'
//import List from './List'
import {AiOutlineFacebook,AiOutlineTwitter,AiOutlineLinkedin} from 'react-icons/ai'
const Color = "#ec70ff"
export default function Footer(){
	return(
		<div  style={{padding:"20px",width:"100%",display:"flex",flexDirection:"column",bottom:"0px",height:"auto",alignItems:"center",backgroundColor:"purple",marginTop:"80px"}}>
			<div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"0",width:"80%"}}>
			<div style={{color:"white",width:"160px",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"space-around",alignItems:"center"}}>
				<div style={{fontSize:"25px",fontWeight:"600"}}>Address</div>
				<div style={{borderLeft:`solid ${Color} 4px`,paddingLeft:"10px"}}>10335 Cross Creek Blvd , Suite 27, Tampa, FL 33647</div>
			</div>
			<div style={{color:"white",width:"100px",display:"flex",flexDirection:"column",height:"110px",justifyContent:"space-around"}}>
				<div style={{fontSize:"25px",fontWeight:"600"}}>Pages</div>
				<div style={{borderLeft:`solid ${Color} 4px`,paddingLeft:"10px"}}>Home</div>
				<div style={{borderLeft:`solid ${Color} 4px`,paddingLeft:"10px"}}>Contact us</div>
			</div>
			<div style={{color:"white",width:"150px",display:"flex",flexDirection:"column",height:"120px",justifyContent:"space-around"}}>
				<div style={{fontSize:"25px",fontWeight:"600"}}>Contact us</div>
				<div style={{borderLeft:`solid ${Color} 4px`,paddingLeft:"10px"}}>sonjaymehta@globalvisseinc.com</div>
				{/* <div style={{borderLeft:`solid ${Color} 4px`,paddingLeft:"10px"}}>+91 1111111111</div> */}
			</div>
			</div>
			<hr style={{color:"white",border:"solid #c603fc 1px",width:"80%"}}/>
			<div style={{width:"300px",display:"flex",justifyContent:"space-around",marginBottom:"40px"}}>
				<AiOutlineFacebook onClick={()=>window.open("")} style={{color:"white",fontSize:"34px",cursor:"pointer"}}/>
				<AiOutlineTwitter style={{color:"white",fontSize:"34px",cursor:"pointer"}}/>
				<AiOutlineLinkedin style={{color:"white",fontSize:"34px",cursor:"pointer"}}/>
			</div>
			<div style={{height:"100%",display:"flex",alignItems:"bottom",color:"white"}}>2008-2018 © Copyright Global VISSE, Inc 10335 Cross Creek Blvd, Suite 27, Tampa FL 33647 | All Rights Reserved | Privacy Policy</div>
		</div>
	);
}