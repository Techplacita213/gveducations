import React from 'react'
import {Slide ,Fade} from 'react-reveal'

export default function RoundButton({text,Icon,is,id,func,...otherStyles}) {
    
    return (
   
        <Slide left>
        <div id={id||""} onClick={()=>func?func():null} style={{display:"flex",flexDirection:"column",borderRadius:`${parseInt(otherStyles.width)/2}px`,padding:"10px",alignItems:"center",justifyContent:"center",color:"white",cursor:"pointer",...otherStyles}}>
        
            {Icon?<div style={{marginBottom:"15px"}}>
                    <Icon fontSize={is}/>
                </div>:null}

            {text}
       
        </div>
        </Slide >
        
    )
}
