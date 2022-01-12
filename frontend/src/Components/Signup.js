import React,{useState} from 'react'
import {Form,Row,Col,Container} from 'react-bootstrap'
import RoundButton from './RoundButton'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import {Zoom} from 'react-reveal'
import axios from 'axios'
import Swal from 'sweetalert2'

const durl="http://localhost:5000/"
const purl="/"

export default function Signup({set,teach}) {
    const [image,setImg]=useState("")
    const [phone,setphone]=useState()
    const [name,setname]=useState("")
    const [email,setemail]=useState("")
    const [password,setpass]=useState("")
    const [upi,setupi]=useState("")
    const [college,setcoll]=useState("")

    const sub=()=>{
        const usr={
            email,  
            phone,
            name,
            password,
            college,
            isTeacher:teach,
            isAdmin:false,
            isVerified:false
        }
        console.log(JSON.stringify(usr))
        axios.post(purl+'auth/signup',JSON.stringify(usr),{
            headers:{
                'Content-Type':'application/json'
            }
        }).then((res)=>{
            Swal.fire({
                test:"Successfully Registered",
                icon:"success",
                timer:2000
            }).then(()=>{
                set(false)
            })
       }).catch(error=>{
        Swal.fire({
            test:error.response?.data?.message,
            icon:"error",
            timer:2000
        })
        })
    }

    return (
        <div  style={{zIndex:"10",top:'0',bottom:'0',left:'0',right:'0',position:"fixed",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"rgba(0,0,0,0.35)"}}>
            <div onClick={()=>set(false)} style={{zIndex:"1",top:'0',bottom:'0',left:'0',right:'0',position:"absolute",}}></div>
            {/* <input style={{zIndex:"2"}} type="file" id="img" name="img" accept="image/*" onChange={(e)=>console.log(e.target.files)}/> */}
            <Zoom duration={500}>
            <div style={{padding:"20px",backgroundColor:"white",zIndex:"2",maxWidth:"520px"}}>
            <Container fluid style={{maxWidth:"500px"}}>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={(e)=>setname(e.target.value)} value={name} type="email" placeholder="Name" style={{outline:"purple"}} />
                                </Form.Group>
                            </Col>
                            <Col>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>College</Form.Label>
                                    <Form.Control onChange={(e)=>setcoll(e.target.value)} value={college} type="text" placeholder="College" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control onChange={(e)=>setemail(e.target.value)} value={email} type="text" placeholder="Subject" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            <Col>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control onChange={(e)=>setpass(e.target.value)} value={password} type="password" placeholder="Password" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row >
                            {teach?<Col md={5}>
                                <Form.Group controlId="formGroupPassword">
                                    <Form.Label>UPI</Form.Label>
                                    <Form.Control onChange={(e)=>setupi(e.target.value)} value={upi} type="text" placeholder="UPI" />
                                </Form.Group>
                            </Col>:null}
                            <Col >
                                <Form.Group controlId="formGroupPassword">
                                <Form.Label>Phone no</Form.Label>
                                <PhoneInput
                                    placeholder="Enter phone number"
                                    value={phone}
                                    onChange={setphone}
                                    />
                                </Form.Group>
                            </Col>
                        </Row>
                       <Row>
                            <RoundButton func={()=>sub()} width="130px" height="50px" text="Signup" backgroundColor="purple" margin="auto"/>
                        </Row> 
                    </Container>
                    
            </div>
            </Zoom>
        </div>
    )
}
