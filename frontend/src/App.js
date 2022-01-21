import {useEffect,useContext} from 'react'
import logo from './logo.svg';
import './App.css';
import Header from './Layout/Header';
import Navbar from './Layout/Navbar'
import Home from './Components/Home'
import CourseDetailes from './Components/CourseDetailes'
import { BrowserRouter as Router,Switch,  Route, } from 'react-router-dom'
import Context,{context} from './Components/Context'
import Courses from './Components/Courses'
import Contactus from './Components/Contactus'
import HomeAdmin from './Components/HomeAdmin'
import Footer from './Components/Footer'
import dotenv from 'dotenv'

dotenv.config()


function App() {

  const obj = useContext(context)
  useEffect(()=>{
  })
  return (
    <Context>
        <Router>
              <Navbar/>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
                <Route exact path="/Course">
                  <Courses/>
                </Route>
                <Route exact path="/Contactus">
                  <Contactus/>
                </Route>
                <Route exact path="/CourseDetailes/:name">
                  <CourseDetailes/>
                </Route>      
                <Route exact path="/Admin">
                  <HomeAdmin/>
                </Route> 
              </Switch>
        </Router>
      <Footer/>
    </Context>
  );
}

export default App;
