import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import navlogo from "../assets/Images/sky2.png"
import "../Style/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBell, faComputer, faHouse, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'



export const Navbar = ({userloggedin,token}) => {
    const[menuOpen, setOpen]=useState(false)


    const handleClose =()=>{
      setModalShow(false)
    }

    const handleSignOut =()=>{
      localStorage.clear();

    }
  return (
    <>
    <div className='nav-main p-2 me-3'>
         <nav className='P-2'>
    <Link to="/" className='title ms-5'><img src={navlogo}/></Link>
    <div className='menu' onClick={()=> setOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
    </div>
    
    <ul className={menuOpen ?"open":"close"}>

  
        <li>
              <NavLink to="/">  <FontAwesomeIcon icon={faHouse} className='me-1'/>Home
           </NavLink>
            </li>
        <li>
        <NavLink to="/jobs"><FontAwesomeIcon icon={faComputer} className='me-1'/>Jobs</NavLink></li>
        <li>
        <NavLink to="/contact"><FontAwesomeIcon icon={faAddressBook} className='me-1' />Contact</NavLink></li>
        <li>
        <NavLink to="/forms" className="btn btn-outline-primary" style={{borderRadius:'20px',fontSize:'12px'}} >Upload cv</NavLink>
        </li>
        <li>
        {token?
                  <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FontAwesomeIcon icon={faUser}/> Profile
                  </Dropdown.Toggle>
            
                  <Dropdown.Menu>
                    <Dropdown.Item href='/profile'>Profile Details</Dropdown.Item>
                    <Dropdown.Item href="/" onClick={handleSignOut}>Sign-out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
        
        
        :<NavLink to="/logs">
         
          <FontAwesomeIcon icon={faRightToBracket} className='me-1' />        
             Signup/Signin</NavLink>}
        </li>
           
    </ul>
   </nav>
    </div>
        
    </>
  )
}
