import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "../Style/Navbar.css"
import "../Style/Resume.css"
import step1 from "../assets/Images/step1.png"
import step2 from "../assets/Images/step2.png"
import step3 from "../assets/Images/step3.png"
export const Resume = () => {
  return (
    <div className='images '>
    <div className='image-overlays'>
    <div className="container">
  <div className="row " >
    <div className="col-sm " >
     <img src={step1} className='mt-5'/>
     <h1 id='jobsfont' style={{color:"orange" ,fontSize:"30px"}} >step 1</h1>
     <h3 id='jobsfont'  style={{color:"white"}}>REGISTER AN ACCOUNT</h3>
     <li >
     <Link to="/logs"><span> <button className='butt'  id='jobsfont' style={{fontSize:"15px"}} >SignUp</button> </span> </Link>
   </li>
    </div>
    <div className="col-sm">
      <img src={step2}  className='mt-5'/>
      <h1 id='jobsfont' style={{color:"orange" ,fontSize:"30px"}}>step 2</h1>
      <h3 id='jobsfont' style={{color:"white"}}>SEARCH YOUR DESIRED JOB</h3>
    </div>
    <div className="col-sm">
    <img src={step3}  className='mt-5'/>
    <h1 id='jobsfont' style={{color:"orange" ,fontSize:"30px"}}>step 3</h1>
    <h3 id='jobsfont' style={{color:"white"}}>  SEND YOUR RESUME TO EMPLOYERS</h3>
    <Link to="/forms"><span> <button className='butt'  id='jobsfont' style={{fontSize:"15px"}} >Upload Your CV</button> </span> </Link>
    </div>
  </div>
</div>
    </div>
   
</div>
  )
}
