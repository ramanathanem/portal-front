import React from 'react'
import Footerlogo from "../assets/Images/sky1.png"
import '../Style/Footer.css'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
export const Footer = ({setAdmin}) => {

  const navigate = useNavigate();

  const handleadmin = ()=>{
    setAdmin(true);
    navigate('/adminlog')
  }
  return (

    <div  id ="foot p-5" >
    <div className="row me-0">
      <div className="col-sm " style={{marginTop:"20px"}} >
   
     
       <img className='ms-2' src={Footerlogo}/>
        <ul style={{listStyle:"none"}} className='mt-3' >
  
           <div>
            
           </div>
       
           <i className="bi bi-whatsapp me-2" id='whatsapp'></i>
            <i className="bi bi-facebook me-2" id='face'></i>
             <i className="bi bi-instagram me-2" id='insta' style={{color:"white"}}></i>
             <i className="bi bi-linkedin" id='linkedin'></i>
        </ul>
      </div>
      <div className="col-sm">
      <div className="row">
  <div className="col-6 col-sm-4"><ul style={{marginTop:"20px",listStyle:"none", fontSize:'20px'}}>
    <h4 id='jobsfont' style={{fontSize:'17px'}} >EMPLOYERS</h4>
  <Link to='/jobs' id='employe'> <li id='employe-font' style={{fontSize:'14px'}}>Jobs</li></Link> 
  <Link to='/forms' id='employe'>  <li id='employe-font' style={{fontSize:'14px'}}>Register</li></Link>
  <Link to="/contact" id='employe'> <li id='employe-font' style={{fontSize:'14px'}}>Contact</li></Link> 
  </ul>
  </div>
       </div>
      </div>
      <div className="col-sm">
      <div className="row container ">
      <h4 style={{marginTop:"17px",fontSize:'17px'}}  >CONTACT US</h4>
      <ul style={{listStyle:"none"}}>
        <li id='jobsfont' style={{fontSize:'14px'}}><i className="bi bi-telephone-fill"></i> +91 8610010780</li>
        <li id='jobsfont' style={{fontSize:'14px'}}><i className="bi bi-envelope-arrow-down-fill"></i> skylark@gmail.com</li>

       </ul>
  <iframe style={{height:"150px"}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.9857877527907!2d80.19667967381147!3d13.036576513452896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5266d82d157b91%3A0xf523e9cc8829b378!2sSkylark%20HR%20Solutions%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1707732128380!5m2!1sen!2sin" width="400" height="300"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
</div>
<ul style={{listStyle:"none",display:"flex",margin:"25px"}}>
    
       </ul>
      </div>
      
    </div>
    <hr/>
    <p className='text-center mb-0' >Copyright © 2024 Skylark HR Solutions Pvt Ltd HR Solutions Pvt Ltd. 
     <i className="bi bi-whatsapp me-2 " id='whatsapp'></i> 
     <i className="bi bi-facebook me-2" id='face'></i>
      <i className="bi bi-instagram me-2" id='insta'style={{color:"white"}}></i>
      <i className="bi bi-linkedin"id='linkedin' ></i>
    
    </p>
    <p onClick={handleadmin} className='text-end me-3' style={{cursor:'pointer'}}><FontAwesomeIcon icon={faUser}/> Admin</p>
   <div>
   </div>
  </div>
  )
}
