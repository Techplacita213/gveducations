import React from 'react'

export default function Instructor({data}) {
    return (
        <div style={{width:"100%",padding:"10px"}}>
            <h2>Instructor</h2>
            <div style={{display:"flex",flexDirection:"row",alignItems:'center',flexWrap:"wrap"}}>
                <div style={{fontSize:"20px",fontWeight:"600",marginLeft:"30px"}}>
                    {data.Instructor}
                </div>
            </div>
        </div>
    )
}
