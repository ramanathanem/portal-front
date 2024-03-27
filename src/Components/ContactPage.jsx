import React,{useState} from 'react'
import '../Style/ContactPage.css'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { Footer } from './Footer';
import { Link } from 'react-router-dom';
const ContactPage = () => {
    const [validated, setValidated] = useState(false);

  const handlesSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const [contact, setContact]=useState({
    email:'',
    phoneNumber:'',
    firstname:'',
    message:'',
  });
  const [errors, setErrors]=useState({
    phoneNumber:'',
    email:'',
    server:'',
  });

  const validEmails = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  const validMobileno = (phoneNumber) => {
    const mobilenoPattern = /^\d{10}$/;
    return mobilenoPattern.test(phoneNumber);
  }
  const handleSubmit = (e) => {

    e.preventDefault();
    const emailIdvalid = validEmails(contact.email);
    const mobilelenovalid = validMobileno(contact.phoneNumber);
    console.log('number :',contact.phoneNumber)

    setErrors({
      email: emailIdvalid ? '' : 'Please enter a valid email',
      mobileno: mobilelenovalid ? '' : 'Mobileno must be at least 10 numbers',
      server: '',
    });
    if (emailIdvalid && mobilelenovalid) {
      console.log('sumbit successful:', contact);
      setContact({
        
        email:'',
        phoneNumber:'',
        firstname:'',
        message:'',
      })
    }}
    const handleSubmitOnChange = (e) => {

      const { name, value } = e.target;
      setContact((prevFromData) => ({
        ...prevFromData,
        [name]: value,
      }));
      console.log('number :',contact.phoneNumber)
      console.log('number :',contact.email)
    }
  return (
    
    <div>
        <div className='contact-welcome'>
<p className='contact-help p-5'>Employer Help Center</p>
<p className='contact-help-content mt-3'>How can we help today?</p>
        </div>
        <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="card mt-4">
            <div className="card-header">
              Contact Info
            </div>
            <div className="card-body ">
              <h5 className="card-title">Contact</h5>
              <p className="card-text">  
          
        
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Name"
        className="mb-3"
        value={contact.firstname} name='firstname' onChange={handleSubmitOnChange}
      >
        
        <Form.Control type="text" placeholder="name@example.com" 
       />

       </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Email"
        className="mb-3"
      >
        
        <Form.Control type="email" placeholder="name@example.com" 
         value={contact.email} name='email' onChange={handleSubmitOnChange}/>
      </FloatingLabel>

      {errors.email && <p className="error text-danger">{errors.email}</p>}

      <FloatingLabel
        controlId="floatingInput"
        label="Enter Mobile Number"
        className="mb-3"
       
        
      >
        
        <Form.Control type="number"  value={contact.mobileno} name='phoneNumber' onChange={handleSubmitOnChange} placeholder="name@example.com" />
    
      </FloatingLabel>
      {errors.mobileno && <p className="error text-danger ">{errors.mobileno}</p>}
     

     


      <FloatingLabel
        controlId="floatingInput"
        label="Message"
        className="mb-3"
      >
        <Form.Control type="text" placeholder="name@example.com"
           value={contact.message} name='message' onChange={handleSubmitOnChange} />
      </FloatingLabel>
                
                </p>
                <Link
                 to="/forms"><span> <button className='con-bu'  onClick={handleSubmit}>Sumbit</button> </span> </Link>

            </div>
          </div></div>
          <div className="col-sm-4"><div className="card mt-5" >
            <div className="card-body">
              <h5 className="card-title">Contact Information</h5>

              <p className="card-text"><i className="bi bi-telephone-fill"></i>  +91 8610010780</p>
              <p className="card-text">    <i className="bi bi-envelope-check"></i> skylarkhr@gmail.com</p>
              <h5 className="card-title">Social Network</h5>
              <a href="#" className="me-2"><i className="bi bi-whatsapp" id='whatsapps'></i></a>
            
              <a href="#" className="me-2"><i className="bi bi-facebook" id='facebook'></i></a>
              <a href="#" className="me-2"><i className="bi bi-instagram" id='instagram'></i></a>
              <i class="bi bi-linkedin" id='linkedin'></i>
            </div>
          
          </div></div>
        </div>
        <p className='mt-2 contact-foot'>* By providing your phone number, you agree that Indeed may call you about your request.</p>
     <p className='mt-2 contact-foot'>We respond to most messages within 24 hours. If you do not see the response, check your “junk mail” folder or “spam” folder</p>
      </div>
     <Footer />
    </div>
  )
}

export default ContactPage