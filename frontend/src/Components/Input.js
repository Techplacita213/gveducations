import React from 'react'

export default function Input({type,place,val,chg,...otherStyles}) {
    return (
        <div style={{width:"90%",marginTop:"15px",height:"30px",backgroundColor:"white",...otherStyles}}>
            <input type={type?type:"text"} value={val} onChange={(e)=>chg(e.target.value)} style={{border:"none",outline:"none",backgroundColor:"transparent"}} placeholder={place} />
        </div>
    )
}
