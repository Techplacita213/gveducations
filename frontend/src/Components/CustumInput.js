import React from 'react'

export default function CustumInput({place,chg,val,type}) {
    return (
        <div style={{padding:"5px",backgroundColor:"#f1f1f1",marginTop:"10px",borderRadius:"10px"}}>
            <input type={type} val={val} onChange={(e)=>chg(e.target.value)} style={{border:"none",background:"transparent",outline:"none",color:"black",width:"100%"}} placeholder={place} />
        </div>
    )
}
