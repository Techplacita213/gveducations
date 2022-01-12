import React from 'react'

export default function ReviewNo({itm,perc}) {
    return (
        <div style={{display:"flex",flexDirection:"row",alignItems:'center',marginTop:"10px"}}>
            <div style={{marginRight:"10px"}}>{itm} Star</div>
            <div style={{width:"60%",height:"20px",backgroundColor:"#bdbdbd"}}>
                <div style={{width:perc,backgroundColor:"lightblue",height:"20px"}}></div>
            </div>
        </div>
    )
}
