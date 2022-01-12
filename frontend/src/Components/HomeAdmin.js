import React,{useContext, useState} from 'react'
import Input from './Input'
import axios from 'axios'
import { context } from './Context'
import { Form } from 'react-bootstrap';
import {uploadFile} from '../utils/upload'

let file = new FormData();
const durl="http://localhost:5000/"
const purl="/"
export default function Home() {
    const [topics,settop]=useState([])
    const [topic,settopic]=useState("")
    const [name,setname]=useState("")
    const [In,setIn]=useState("")
    const [dur,setdur]=useState("")
    const [cat,setcat]=useState("")
    const [price,setprice]=useState("")
    const [batchSize,setbat]=useState("")
    const [lang,setlang]=useState("")
    const [overview,setv]=useState("")
    const ob = useContext(context)
    const [Timing,setTiming]=useState([])
    const [time,settime]=useState([])
    const [url,setUrl] = useState('')
   // const [file,setFile]=useState()
    async function sub(){ 
        const obj={
            name,
            Instructor:ob.user.name,
            overview,
            Features:{
                duration:dur,
                batchSize,
                language:lang,
            },
            cateo:cat,
            price,
            Topics:topics,
            date:time,
            url:url
        }
        
       

        
//         fetch('http://localhost:5000/course/postCourses', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//        'Access-Control-Allow-Origin':'*'
//     },mode:'no-cors',
//     body: JSON.stringify(obj)
//   }).then((res)=>{
//       res.blob().then(function (blb){
//           console.log(blb)
//       })
//   }).then((data)=>{
//       console.log(data)
//   }).catch(err=>console.log(err))

  axios.post(purl+'course/postCourses',obj,{
      withCredentials:true,
      headers:{
        'Content-Type': 'multipart/form-data'
      }
  }).then((res)=>{
      console.log(res)
  })
  file=new FormData()
    }
    async function fileAdd(e){
        //const file = new FormData();
        //console.log(e.target.files[0])
        file.set('productImage',e.target.files[0])
        const url = await uploadFile(e.target.files[0])
        setUrl(url)
        // console.log(file)
        // setFile(file)
    }

    function add(txt){ 
        if(txt=="")
            return      
        let top=[...topics]
        top.push(txt)
        settop(top)
        settopic("")
    }
    function addTime(txt){ 
        if(txt=="")
            return      
        let top=[...Timing]
        top.push(txt)
        setTiming(top)
        settime("")
    }
    function Clear(set){
        set([])
    }
    return (
        
        ob.isLogged&&ob.isTeacher?<div style={{backgroundSize:"cover",display:"flex",flexDirection:"column",justifyContent:'center',alignItems:"center",width:"100%",height:"100%"}}>
            <style>{`body{background:url(https://media.istockphoto.com/photos/purple-defocused-blurred-motion-abstract-background-picture-id1273929462?k=20&m=1273929462&s=612x612&w=0&h=jJ0xkuDVJQMp6YwnAiqbtM8nwid36M97VIFxCP_sKCE=) no-repeat center fixed;background-position:fixed;background-size:cover;}`}</style>
            <div style={{width:"400px",height:"auto",padding:"10px",backgroundColor:"rgba(255,255,255,0.9)",boxShadow:"0px 0px 25px rgba(0,0,0,0.5)",display:'flex',flexDirection:"column",alignItems:"center"}}>
                <Input place="name" chg={setname} />               
                
                    <Input chg={setdur} place="Duration" />
               

                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"90%"}}>
                    <Input chg={setcat} place="cateo" width="45%"/>
                    <Input chg={setprice} place="price" width="45%" />
                </div>
                
                <textarea onChange={(e)=>setv(e.target.value)} value={overview} style={{width:"90%",marginTop:"15px"}} placeholder="overview" />

                {topics.map((txt,index)=><div style={{marginTop:"10px"}}>
                    {index+1}. {txt}
                </div>)}

                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Input val={topic} chg={settopic}  place="Topic" width="68%"/>
                    <button onClick={()=>add(topic)} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"50px",height:"30px",color:"white",marginTop:"10px"}}>ADD</button>
                    <button onClick={()=>Clear(settopic)} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"50px",height:"30px",color:"white",marginTop:"10px"}}>Clear</button>
                </div>
                <div style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:"90%"}}>
                    <Input chg={setbat} place="batch size" width="45%"/>
                    <Input chg={setlang} place="Language" width="45%" />
                </div>
                
                {Timing.map((txt,index)=><div style={{marginTop:"10px"}}>
                    {index+1}. {txt}
                </div>)}

                <div style={{width:"90%",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
                    <Input type="Date" val={time} chg={settime}  place="Topic" width="60%"/>
                    {/* <button onClick={()=>addTime(time)} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"50px",height:"30px",color:"white",marginTop:"10px"}}>ADD</button>
                    <button onClick={()=>Clear(setTiming)} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"50px",height:"30px",color:"white",marginTop:"10px"}}>Clear</button> */}
                </div>
                <input onChange={fileAdd} type="file" id="img" name="img" accept="image/*" style={{marginTop:"10px"}}/>
                <button onClick={()=>sub()} style={{border:"none",backgroundColor:"purple",padding:"5px",width:"90%",height:"30px",color:"white",marginTop:"10px"}}>Submit</button>
                
            </div>
            {/* <div>
                <button  style={{border:"none",backgroundColor:"purple",padding:"5px",width:"120px",height:"30px",color:"white",marginTop:"10px"}}>Delete</button>
                <select>

                </select>
            </div> */}
        </div>  :<h1 style={{textAlign:"center",marginTop:"20px"}}>Only teachers can add courses</h1>
    )
}
