import React,{useEffect} from 'react'
import {FaStar,FaClock,FaUser,FaCheck,FaLanguage,FaChalkboardTeacher} from 'react-icons/fa'

export default function Overview({data}) {
    
    return (
        <div style={{height:"auto",padding:"15px",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap"}}>
        <div id="para" style={{width:"65%",paddingRight:"5vw",}}>
            {data.overview}
        </div>
        <div style={{width:"320px",height:"auto",display:"flex",flexDirection:"column",borderLeft:"solid grey 1px"}}>
            <h3 style={{marginLeft:"15px"}}>Course Features</h3>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaUser style={{marginRight:"10px",color:"purple"}}/> Students</div>
                <div>{data.users?.length} Students</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaCheck style={{marginRight:"10px",color:"purple"}}/> max Students</div>
                <div>{data.Features?.batchSize}</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaClock style={{marginRight:"10px",color:"purple"}}/> max duration</div>
                <div>{data.Features?.duration} week</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",borderBottom:"solid grey 1px"}}>
                <div><FaLanguage style={{marginRight:"10px",color:"purple"}}/> Language</div>
                <div>{data.Features?.language}</div>
            </div>
            <div style={{width:"90%",margin:"auto",display:"flex",flexDirection:"row",justifyContent:"space-between",padding:"15px",}}>
                <div><FaChalkboardTeacher style={{marginRight:"10px",color:"purple"}}/> type</div>
                <div>Live</div>
            </div>
        </div>
    </div>
    )
}
