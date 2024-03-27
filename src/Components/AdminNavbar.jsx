import React,{useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import Dropdown from 'react-bootstrap/Dropdown';
import navlogo from "../assets/Images/sky2.png"
import { Modal } from 'react-bootstrap';
import "../Style/Navbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook,  faHouse, faMagnifyingGlass, faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import PostJob from './PostJob';

 const AdminNavbar = ({adminToken}) => {
    const[menuOpen, setOpen]=useState(false)
    const [modalShow, setModalShow] = useState(false);


    const handleSignOut =()=>{
      localStorage.clear();

    }
  return (
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
        <NavLink to="/contact"><FontAwesomeIcon icon={faAddressBook} className='me-1' />Applicants</NavLink>
        </li>
        <li>
        <NavLink to="/contact"><FontAwesomeIcon icon={faMagnifyingGlass} className='me-1' />Find Candidates</NavLink>
        </li>
        
        <li>
        <NavLink  className="btn btn-outline-primary" onClick={()=>setModalShow(true)} style={{borderRadius:'20px',fontSize:'12px'}} >Post a job</NavLink>
        </li>
        <li>
        {adminToken?
                  <Dropdown>
                  <Dropdown.Toggle variant="light" id="dropdown-basic">
                  <FontAwesomeIcon icon={faUser}/> Profile
                  </Dropdown.Toggle>
            
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Profile Details</Dropdown.Item>
                    <Dropdown.Item href="/" onClick={handleSignOut}>Sign-out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
        
        
        :<NavLink to="/logs">
         
          <FontAwesomeIcon icon={faRightToBracket} className='me-1' />        
             Signup/Signin</NavLink>}
        </li>
           
    </ul>
   </nav>
   <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      backdrop="static"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Post Job
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Add Job Details</h4>
         <PostJob  setModalShow={setModalShow}/>
      </Modal.Body>
      <Modal.Footer>
      
      </Modal.Footer>
    </Modal>
    </div>
  )
}

export default  AdminNavbar