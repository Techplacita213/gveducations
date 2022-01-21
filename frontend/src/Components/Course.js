import React,{useEffect} from 'react'
import {Card} from 'react-bootstrap'
import {FaStar} from 'react-icons/fa'
import {FaGraduationCap} from 'react-icons/fa'
import { LIVE_URL } from '../utils/url'

const durl="http://localhost:5000/"
const purl=LIVE_URL

export default function Course({data}) {
    useEffect(()=>{
        data.productImage=data.productImage.replace(String.fromCharCode(92),"/")
        console.log(data.productImage)
    },[])
    return (
        <Card style={{cursor:"pointer",width:"340px",height:"400px",borderRadius:"8px",overflow:"hidden",boxShadow:"0px 0px 40px rgba(0,0,0,0.5)",marginBottom:"20px",borderBottom:"solid purple 2px"}}>
            <Card varient="top" style={{width:"100%",height:"77%",padding:"0",margin:"0",background:`url(http://localhost:5000/uploads/image.png) no-repeat`,backgroundSize:"cover",backgroundPosition:"center",position:"relative"}}>
                <div style={{width:"100%",height:"100%",background:"linear-gradient(to bottom,transparent 50%,rgba(0,0,0,0.5))",display:"flex",alignItems:"flex-end",justifyContent:"center",zIndex:"2"}}>
                    <div style={{width:"95%",display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                        <div style={{fontSize:"20px",fontWeight:"700",color:"white"}}>
                            Rs {data.price}
                        </div>
                        {/* <div style={{color:"white",display:"flex",flexDirection:"column",alignItems:'center'}}>
                            <div style={{display:"flex",flexDirection:"row",width:"94px",justifyContent:"space-between",marginBottom:"5px"}}>
                                <FaStar color="yellow"/>
                                <FaStar  color="yellow"/>
                                <FaStar  color="yellow"/>
                                <FaStar  color="yellow"/>
                                <FaStar  color="yellow"/>
                            </div>
                            (1 review)
                        </div> */}
                    </div>
                </div>
                <img  style={{top:"0",right:"0",bottom:"0",left:"0",position:'absolute',width:"100%",height:"100%",zIndex:"1"}} src={data.productImage}/>
            </Card>
            <Card.Body style={{fontFamily:"sans-serif",padding:"5px"}}>
                <Card.Title style={{fontWeight:"800"}}>{data.name}</Card.Title>
                <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:"25px",marginBottom:"25px"}}>
                    <div> <FaGraduationCap style={{marginRight:"10px",fontSize:"22px",color:"grey"}} />{data.Instructor}</div>
                    <div>Batch Size : {data.Features.batchSize||"20"}</div>
                </div>
            </Card.Body> 
        </Card>
    )
}
