import React from 'react'

export default function Cirr({Topics}) {
    return (
        <div style={{padding:"10px"}}>
            <h1 style={{marginBottom:"20px"}}>Topics</h1>
            {Topics.map((topic)=>{
                return(<div style={{minWidth:"300px",width:"300px",height:"40px",marginLeft:"60px",display:'flex',justifyContent:'center',alignItems:"center",borderRadius:'8px',backgroundColor:"#f1f1f1",borderLeft:"solid purple 3px",marginBottom:"10px"}}>
                        {topic}
                </div>)
            })}
        </div>
    )
}
