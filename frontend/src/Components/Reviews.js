import React,{useEffect,useState} from 'react'
import ReviewNo from './ReviewNo'
import {FaStar,FaClock} from 'react-icons/fa'

export default function Reviews() {
    let loop=[];
    const [shw,setshw]=useState(true)
    useEffect(() => {
        for(let i=0;i<5;i++)
            loop.push(<ReviewNo itm={`${i+1}`} perc={`${100/(i+1)}%`} />)
         setshw(loop)
    })
    
    return (
        <div style={{width:"100%",padding:'10px'}}>
            <div><div style={{display:"flex",flexDirection:"row",maxWidth:"94px",justifyContent:"space-between",marginTop:"5px"}}>
                                <FaStar  color="golden"/>
                                <FaStar   color="darkyellow"/>
                                <FaStar   color="darkyellow"/>
                                <FaStar  color="darkyellow"/>
                                <FaStar  color="darkyellow"/>
                            </div></div>
            <div style={{display:'flex',flexDirection:"column",margin:"20px"}}>
                {shw}
            </div>
        </div>
    )
}
