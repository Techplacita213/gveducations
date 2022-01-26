import React,{useEffect,useState,useContext} from 'react'
import Heading from './Heading'
import './home.css'
import Course from './Course'
import RoundButton from './RoundButton'
import {Link} from 'react-router-dom'
import Header from '../Layout/Header'
import {context} from './Context'
import {Spinner} from "react-bootstrap"


const arrImg=['https://www.gettingsmart.com/wp-content/uploads/2017/01/Teacher-Helping-Young-Students-at-Table-Feature-Image.jpg',
'https://s35691.pcdn.co/wp-content/uploads/2017/09/iStock-507009337-171002.png',
'https://elearningindustry.com/wp-content/uploads/2020/10/advantages-and-disadvantages-of-online-learning.jpg','https://edkt.net/294edtech/6-strategies-for-maximised-learning-1568915627742.jpg','https://wp-media.petersons.com/blog/wp-content/uploads/2019/06/13104106/iStock-914314318.jpg']
let imgIndex=[0,1,2,3,4,0,1]
let start=5
let run=7
export default function Home() {
    const obj=useContext(context)
   
    useEffect(()=>{
        console.log(obj.course)
        if(window.innerWidth<800){
            run=7;
            start=5;
            
          }
          else{
              run=5;
              start=0
          }
          
        const id=setInterval(()=>{
            const elem=document.querySelectorAll('#courseImg')
            
            for(let i=start;i<run;i++){ 
            //    console.log(i)       
                elem[i].classList.add('anim')
                let flag=false;
               // console.log(i)
                elem[i].addEventListener('animationend',()=>{
                    if(flag==false){
                        imgIndex[i]=(imgIndex[i]+1)%5
                        flag=true;
                    }
                    elem[i].classList.remove('anim')
                    elem[i].style.background=`url(${arrImg[imgIndex[i]]}) center no-repeat`
                    elem[i].style.backgroundSize="cover"

                })
                
            }
           
           
        },5000)
        return()=>{ clearInterval(id)};
    },[])
    
    return (
        <div>   <Header/>
        <div style={{width:"100%",marginTop:"4vw"}}>
            <Heading text="Course Cateogaries" />
            <div id="cm"  style={{width:"90%",margin:"auto",marginBottom:"70px",marginTop:"70px",justifyContent:"space-between",display:"flex",flexDirection:"row",overflow:"hidden",position:"relative"}}>              
                <div id="courseImg" style={{width:"280px",height:"280px",background:`url(${arrImg[imgIndex[0]]}) center no-repeat`,backgroundSize:"cover"}}></div>
                <div id="courseImg" style={{width:"280px",height:"280px",background:`url(${arrImg[imgIndex[1]]}) center no-repeat`,backgroundSize:"cover"}}></div>
                <div id="courseImg" style={{width:"280px",height:"280px",background:`url(${arrImg[imgIndex[2]]}) center no-repeat`,backgroundSize:"cover"}}></div>
                <div id="courseImg" style={{width:"280px",height:"280px",background:`url(${arrImg[imgIndex[3]]}) center no-repeat`,backgroundSize:"cover"}}></div>
                <div id="courseImg" style={{right:"-312px",position:"absolute",width:"280px",height:"280px",background:`url(${arrImg[imgIndex[4]]}) center no-repeat`,backgroundSize:"cover"}}></div>
            </div>
            <div id="mob" style={{display:"none",width:"280px",justifyContent:"space-between",margin:"auto",marginTop:"60px",marginBottom:"60px",flexDirection:"row",overflow:"hidden",position:"relative"}}>
                <div id="courseImg" style={{width:"280px",height:"280px",background:`url(${arrImg[imgIndex[0]]}) center no-repeat`,backgroundSize:"cover"}}></div>
                <div id="courseImg" style={{right:"-312px",position:"absolute",width:"280px",height:"280px",background:`url(${arrImg[imgIndex[1]]}) center no-repeat`,backgroundSize:"cover"}}></div>
            </div>
            
            <div style={{width:"100%",backgroundColor:"#f1f1f1",padding:"5vw",paddingTop:"5.5vw",display:"flex",flexDirection:"row",justifyContent:"space-between",flexWrap:"wrap"}}>
                <div style={{display:"flex",flexDirection:"column",width:"400px"}}>
                    <h1 style={{fontWeight:"800",marginBottom:"30px"}}>About us</h1>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.<br/> <br/>

Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.<br/><br/> 

Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.<br/><br/></p>
<RoundButton width="130px" height="50px" text="Read More" border="solid purple 1px" color="black" id="rbrm"/>
                </div>
                <div id="imgMob" style={{width:"400px",height:"400px",background:"url(https://cdn.searchenginejournal.com/wp-content/uploads/2019/01/Top-10-Ranking-About-Us-Pages.png) center no-repeat",backgroundSize:"cover"}}>

                </div>
            </div>
            
            <div style={{width:"100%",paddingTop:"30px"}}>
                <Heading text="Courses"  />
                
                <div style={{width:"87%",margin:"auto",display:"flex",flexWrap:"wrap",justifyContent:"space-around",marginTop:"60px"}}>
                   {/* <Link to="/CourseDetailes/JavaScript" style={{textDecoration:"none",textDecorationColor:"none",color:"black"}}> <Course/></Link>
                    <Course/>
                    <Course/> */}
                    {obj.course==="loading"?<Spinner animation="border"/>:obj.course!=""?obj.course.map((data)=>{
                        return(<Link to={`/CourseDetailes/${data.name}`} style={{color:"black",textDecoration:"none"}}><Course data={data} /></Link>)
                    }):<h1>No Courses yet!</h1>}

                </div>
                <RoundButton width="130px" height="50px" text="All Courses" border="solid purple 1px" color="black" id="rbrm" margin="auto" marginTop="20px"/>
            </div>
        </div>
        </div>
    )
}
