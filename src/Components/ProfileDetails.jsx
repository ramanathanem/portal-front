import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FloatingLabel ,Form} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



const ProfileDetails = ({handleCloseModal}) => {
  const [authId, setAuthId] = useState(localStorage.getItem('authId'));
  const navigate = useNavigate()
  const [profile, setProfile] = useState({
    name: '',
    role: '',
    location: '',
    phonenumber: '',
    experience: '',
    email: '',
    currentctc: '',
    noticeperiod: ''
  });

  // Function to fetch profile data from the server
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/profile/specificprofile/${authId}`);
     
      setProfile(response.data); // Assuming response.data contains the profile data
    } catch (error) {
      console.log("Error occurred in Profile Details fetching :", error.message);
    }
  }

  // useEffect to fetch profile data when component mounts
  useEffect(() => {
    fetchData();
  }, [])

  // Function to handle input changes
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Update profile data on the server
      const response = await axios.put(`http://localhost:5000/profile/update/${authId}`, profile);
      console.log("Profile Details Updated Successfully!");
      if(response.status == 200){
      fetchData();
      handleCloseModal();
  
       } else if(response.status == 404){
           alert("Please Try after Sometimes")
       }
    } catch (error) {
      console.log("Error occurred in Profile Details update:", error.message);
    }
  };

  return (
    <div>
      <Form onSubmit={handleSubmit}>
      <FloatingLabel
        controlId="floatingInput"
        label="Enter Full Name"
        className="mb-3"
      >
        <Form.Control  type="text" className=' mt-3'
         onChange={handleOnChange} name='name' value={profile.name} required />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Designation"
        className="mb-3"
      >
        <Form.Control  type="text" className=' mt-3'
         onChange={handleOnChange} name='role' value={profile.role} required/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Location"
        className="mb-3"
      >
        <Form.Control  type="text" className=' mt-3'
         onChange={handleOnChange} name='location' value={profile.location} required/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Phone Number"
        className="mb-3"
      >
        <Form.Control  type="number" className=' mt-3'
         onChange={handleOnChange} name='phonenumber' value={profile.phonenumber} required />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Experience"
        className="mb-3"
      >
        <Form.Control  type="number" className=' mt-3'
         onChange={handleOnChange} name='experience' value={profile.experience} required />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="email"
        className="mb-3"
      >
        <Form.Control  type="text" className=' mt-3'
         onChange={handleOnChange} name='email' value={profile.email} required/>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Current CTC"
        className="mb-3"
      >
        <Form.Control  type="number" className=' mt-3'
         onChange={handleOnChange} name='currentctc' value={profile.currentctc} required />
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingInput"
        label="Notice Period (Days)"
        className="mb-3"
      >
        <Form.Control  type="number" className=' mt-3'
        onChange={handleOnChange} name='noticeperiod' value={profile.noticeperiod} required />
      </FloatingLabel>
      
       
        <button type="submit" className='text-center'>Save Changes</button>
      </Form>
    </div>
  );
};

export default ProfileDetails;
