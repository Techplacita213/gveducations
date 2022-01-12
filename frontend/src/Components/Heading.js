import React from 'react'

export default function Heading({text}) {
    return (
        <div style={{textAlign:"center",fontWeight:"900",fontSize:"45px",display:"flex",justifyContent:"center",position:"relative",fontFamily:"sans-serif",padding:"5px",paddingBottom:"15px"}}>
            {text}
            <div style={{backgroundColor:"purple",height:"3px",width:"50px",bottom:"0px",position:"absolute"}}></div>
        </div>
    )
}
