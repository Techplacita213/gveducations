import React,{useEffect,useState,useContext} from 'react'
import {useParams} from 'react-router-dom'
import {FaStar,FaClock} from 'react-icons/fa'
import Overview from './Overview'
import RoundButton from './RoundButton'
import Instructor from './Instructor'
import Reviews from './Reviews'
import axios from 'axios'
import Cirr from './Cirr'
import {context} from './Context'
import CalenderApi from './CalenderApi'


function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = 'https://checkout.razorpay.com/v1/checkout.js'
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

export default function CourseDetailes(props) {
    const obj=useContext(context)
   const [data,setData]=useState("");
   async function pay(price,email,phone){
        const res = await loadScript();
        if(!res){
            alert("Payment Failed are u online?")
            return;
        }
        console.log(email)
        var options = {
            "key": "rzp_test_52VOHWIY7KTUQ7", // Enter the Key ID generated from the Dashboard
            "amount": `${parseInt(data.price)*100}`, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            "currency": "INR",
            "name": data.name,
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": "1", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            "handler": function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
            "prefill": {
                "email": email,
                "contact": phone
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            },
            "options": {
                "checkout": {
                  "readonly": {
                    "email": "1",
                    "contact": "1"
                  }
                }
              }
        };
        await axios.post('/payment/orderID',{
            amount:options.amount,
        }).then((res)=>{
            options.order_id=res.data
            var rzp1 = new window.Razorpay(options);
            rzp1.on('payment.failed', function (response){
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
            });
            rzp1.open();
        }).catch((err)=>{
            console.log(err)
        })
       
    }

    const {name} = useParams()
    const [selected,setSelected]=useState({
        O:"solid purple 3px",
        Sel:<Overview text={data.overview}/>
    })
    const get=async ()=>{
        const val=await localStorage.getItem(`${name}`)
        if(localStorage.getItem(`${name}`)==null||val===""){
            
            const dat=await obj.findByName(name)
            if(dat!==""){
                await setData(dat)
                await localStorage.setItem(`${name}`,JSON.stringify(dat))
            }
            clickShow('O',<Overview text={JSON.parse(localStorage.getItem(`${name}`)).overview}/>)
        }
        else{
           await setData(await JSON.parse(localStorage.getItem(`${name}`)))
           clickShow('O',<Overview text={JSON.parse(localStorage.getItem(`${name}`)).overview}/>)
        }
       
    }
    useEffect(()=>{  
        get()    
    },[])

    async function clickShow(name,compnent){
        await setSelected({
            [name]:'solid purple 3px',
            Sel:compnent
        })

    }
    return (
        data!==""?
        <div>
            <div  style={{width:"85%",margin:"auto",padding:"1.5vw",boxShadow:"0px 0px 25px rgba(0,0,0,0.3)",boxSizing:"border-box",borderRadius:"7px",marginTop:"90px"}}>
                <h1 id="cdh" style={{marginLeft:"15px",fontWeight:"800"}}>{name} online course</h1>
                <div style={{width:"100%",display:"flex",flexDirection:"row",margin:"25px",marginTop:"30px",marginBottom:"30px"}}>
                    <div style={{width:"25%",borderRight:"solid rgba(0,0,0,0.3) 1px"}}>
                        <div>
                            <div style={{fontWeight:"700"}}>Teacher</div>
                            <div>{data.Instructor}</div>
                        </div>
                    </div>
                    <div style={{width:"25%",borderRight:"solid rgba(0,0,0,0.3) 1px",marginLeft:"15px"}}>
                        <div>
                            <div style={{fontWeight:"700"}}>Cateo</div>
                            <div>{data.cateo||"any"}</div>
                        </div>
                    </div>
                    <div style={{width:"25%",marginLeft:"15px"}}>
                        <div>
                            <div style={{fontWeight:"700"}}>Review</div>
                            <div><div style={{display:"flex",flexDirection:"row",maxWidth:"94px",justifyContent:"space-between",marginTop:"5px"}}>
                                <FaStar  color="darkyellow"/>
                                <FaStar   color="darkyellow"/>
                                <FaStar   color="darkyellow"/>
                                <FaStar  color="darkyellow"/>
                                <FaStar  color="darkyellow"/>
                            </div></div>
                        </div>
                    </div>
                </div>
                <div style={{maxWidth:"300px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",marginTop:"20px",marginBottom:"15px"}}>
                    <h3>Rs {data.price}</h3>
                    {obj?.user?.courses?.includes(data.name)?"The Link Will Appear Here":obj?.user?.email!==data?.email?<RoundButton func={()=>pay(data.price,obj.user.email,obj.user.phone)} text="Buy This Course" width="140px" height="50px" backgroundColor="purple"/>:<CalenderApi/>}
                </div>
            </div>
            <div style={{margin:"auto",marginTop:"40px",width:"85%",marginBottom:"30px",boxShadow:"0px 0px 25px rgba(0,0,0,0.4)",borderRadius:"5px"}}>
            {/* <TabContainer>
                <Tabs defaultActiveKey="overview" id="uncontrolled-tab-example">
                    <Tab eventKey="overview" title={<p style={{borderBottom:"solid purple 1px",hieght:"inherit",padding:".5rem .1rem"}}>Overview</p>}>
                            <Overview/>
                    </Tab>
                </Tabs>
            </TabContainer> */}
            <div style={{width:"100%",height:"50vh",background:"url(https://reptro.xoothemes.com/wp-content/uploads/2018/04/markus-spiske-357131-unsplash-copy-1-1200x560.jpg) center no-repeat",backgroundSize:"cover"}}></div>
            <div style={{width:"100%",display:"flex",flexDirection:"row",borderBottom:"solid rgba(0,0,0,0.3) 1px ",flexWrap:"wrap"}}>
                <div onClick={()=>{
                    clickShow('O',<Overview text={data.overview} />)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['O'],fontWeight:"700",padding:"5px"}}>
                    Overview
                </div>
                <div onClick={()=>{
                    clickShow('Cirriculum',<Cirr Topics={data.Topics}/>)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['Cirriculum']||"",fontWeight:"700",padding:"5px",marginLeft:"10px"}}>
                    Cirruculum
                </div>
                <div onClick={()=>{
                    clickShow('I',<Instructor/>)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['I']||"",fontWeight:"700",padding:"5px",marginLeft:"10px"}}>
                    Instructor
                </div>
                {/* <div onClick={()=>{
                    clickShow('R',<Reviews/>)
                }} style={{width:"auto",height:"50px",display:"flex",justifyContent:"center",alignItems:"center",borderBottom:selected['R']||"",fontWeight:"700",padding:"5px",marginLeft:"10px"}}>
                    Reviews
                </div> */}
            </div>
            {selected.Sel}
           </div>
        </div>:null
    )
}
