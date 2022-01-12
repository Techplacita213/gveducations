import React from 'react'

export default function NavItem({text,select,set}) {
    return (
        <div style={{fontWeight:"bold",color:"#242323",fontSize:"16px",fontFamily:"sans-serif",borderTop:select?"solid purple 2px":"",height:"30px",display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer"}} onClick={()=>{set({[text]:true})
            localStorage.setItem("selected",text)
        }}>
            {text}
        </div>
    )
}
