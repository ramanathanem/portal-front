import React, { useState, useEffect ,useRef} from 'react';
import '../Style/CandidateProfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDay, faDownload } from '@fortawesome/free-solid-svg-icons';
import { Modal,Form,Col ,Button,Toast,Row} from 'react-bootstrap';
import ProfileDetails from './ProfileDetails';
import axios from 'axios';
import ProfileSummary from './ProfileSummary';
import SkillInput from './SkillInput';
import Education from './Education';

const CandidateProfile = () => {
  const fileInputRef = useRef(null);
  const [authId, setAuthId] = useState(localStorage.getItem('authId'));
  const [modalShow, setModalShow] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [showProfile,setShowProfile] = useState (false);
  const [showUpload,setShowUpload] = useState(false);
  const [showSummary,setShowSummary] = useState(false);
  const [showSkills,setShowSkills] = useState(false);
   const[showEducation,setShowEducation] =useState(false);
  const [showToast, setShowToast] = useState(false);
  const [languages, setLanguages] = useState([
    { id: 1, name: 'English', proficiency: 'Advanced', read: false, write: false, speak: true },
    { id: 2, name: 'French', proficiency: 'Intermediate', read: true, write: false, speak: true },
    { id: 3, name: 'Spanish', proficiency: 'Beginner', read: false, write: false, speak: false }
  ]);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/profile/specificprofile/${authId}`);
      setProfileData([response.data]);
    } catch (error) {
      console.log("Error occurred while fetching profile data:", error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, [authId]);

  const handleEditProfile = () => {
    setModalShow(true);
    setShowProfile(true);
  };

  const handleCheckboxChange = (languageId, skill) => {
    setLanguages(languages.map(language => {
      if (language.id === languageId) {
        return { ...language, [skill]: !language[skill] };
      }
      return language;
    }));
  };

// upload Cv section
  const handleUpload = ()=>{
    setModalShow(true);
    setShowUpload(true); 
  }  

   const uploadSubmit = async (e)=>{
    e.preventDefault();
    const file = fileInputRef.current.files[0];
    const formData = new FormData();
    formData.append('file', file);

    try {
      
      const response = await axios.post(`http://localhost:5000/profile/uploadcv/${authId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if(response.status == 201){
        handleCloseModal()
      }
      
    } catch (error) {
      console.error('Error uploading file:', error);
    }
   }

  const handleCloseModal = () => {
    setModalShow(false);
    setShowProfile(false);
    setShowUpload(false); 
    setShowSummary(false);
    setShowSkills(false);
    fetchData();
  };

  const getCVName = (fileName) => {
    const parts = fileName.split('_');
    const name = parts.slice(1).join('_').replace(' ', ''); 
    return name;
  };
  
  const getUploadDate = (fileName) => {
   
    const parts = fileName.split('_'); 
    const datePart = parts[0];
    const year = datePart.slice(0, 4);
    const month = datePart.slice(5, 7);
    const day = datePart.slice(8, 10);
   
    const formattedDate = `${year}-${month}-${day}`;
    return `Uploaded on ${formattedDate}`;
};

// handle delete and download cv 
const handleDownload = async (name) => {
  try {
    const response = await axios.get(`http://localhost:5000/profile/download/${authId}`, {
      responseType: 'blob',
    });
    
    if (response.status === 201) {
      alert("Candidate CV not available. Please upload.");
    } else {
      const blob = new Blob([response.data]);
      const link = document.createElement('a');
       
     

      const fileName = `${name}_CV.pdf`; // Replace whitespace with underscores

      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  } catch (error) {
    console.error('Error downloading CV:', error);
  }
};
   const [delFeedBack,setDelFeedBack] = useState(false);

const handleDelete = async (id) => {
  try {
   
   const response =  await axios.delete(`http://localhost:5000/profile/delete/${id}`);
     
      if(response.status == 204){
        setShowToast(true); 
        setDelFeedBack(true);
        fetchData();
      }else if(response.status == 205){
        alert("There is some issue with your uploaded cv.Please re-upload.")
      }
  
  } catch (error) {
    console.error('Error deleting file:', error);
   
  }
};
  //  handle profile summary 
  const handlesummary = ()=>{
    setModalShow(true);
    setShowSummary(true)
  } 
  // handle keyskills
  const handleSkills = ()=>{
    setModalShow(true);
    setShowSkills(true)
  }
  // handle Education 
  const handleeducation =()=>{
    setModalShow(true);
  }
 
    const handleToastClose = ()=>{
      setShowToast(false);
      setDelFeedBack(false);
      setSummaryFeedBack(false)

    }

   
  return (
    <>
    <div className='p-5' >
    {profileData.map((data, index) => (
        <div key={index} >
          <div className='profile-info p-5'>
            <h5 className='profile-name'>{data.name.toUpperCase()} <i className="bi bi-pencil-fill edit-profile" onClick={handleEditProfile}></i></h5>
            <h5 className='profile-role'>{data.role}</h5>
            <hr />
            <div className="row">
              <div className="col">
                <p className='profile-contact'><i className="bi bi-geo-alt-fill" style={{ fontSize: '14px', color: '#717b9e' }}></i> {data.location}</p>
                <p className='profile-contact'><i className="bi bi-suitcase-lg-fill profile-explogo"></i> {data.experience} Years</p>
                <p className='profile-contact'><i className="bi bi-currency-rupee"></i> {data.currentctc} LPA</p>
              </div>
              <div className="col">
                <p className='profile-contact'><i className="bi bi-telephone-fill "></i> {data.phonenumber}  </p>
                <p className='profile-contact'><i className="bi bi-envelope-arrow-up-fill"></i> {data.email} </p>
                <p className='profile-contact'><FontAwesomeIcon icon={faCalendarDay} /> {data.noticeperiod} Days</p>
              </div>
            </div>
          </div>
        </div>
      ))}
          <div className='upload-cv mt-3 p-5'>
                 {profileData.map((data, index) => (
                   <div key={index}>
                     <p className='profile-resume'>Resume</p>
                     <hr />
                     {data.cvname && (
                       <>
                         <p className='profile-pdf'>{getCVName(data.cvname)}</p>
                         <p className='profile-pdfdate'>{getUploadDate(data.cvname)}</p>
                       </>
                     )}
                     <span className='cv-icon text-primary'>
                       <FontAwesomeIcon onClick={()=>handleDownload(data.name)} icon={faDownload} />
                     </span>
                     <span className='cv-icon text-danger'>
                       <i className="bi bi-trash3-fill" onClick={()=>handleDelete(data._id)}  > </i>
                     </span>
                     <div className='upload-profilecv mt-3 p-4 text-center'>
                       <span className='btn btn-outline-primary pro-cv' onClick={handleUpload}>Upload CV</span>
                       <p className='format mt-3'>Supported Formats: doc, docx, rtf, pdf, upto 2 MB</p>
                     </div>
                   </div>
                 ))}
                </div>
                
         
                {profileData.map((data, index) => (
               <div key={index} className='profile mt-3 p-4 '>
                     <p className='profile-resume'>Profile summary <i className="bi bi-pencil-fill edit-profile" onClick={handlesummary}></i></p><hr/>
                     <p className='profile-summary '>{data.profileSummary}</p>
                </div>
                ))}


         <div className='keyskill mt-3 p-3'>
                 <p className='profile-key p-3'>Key Skill <i className="bi bi-pencil-fill edit-profile" onClick={handleSkills}></i></p><hr/>
                 {profileData.map((data, dataIndex) => (
          <div key={dataIndex} className='d-flex p-2'>
    {data.keySkills.map((skill, skillIndex) => (
      <div key={skillIndex} className='profile p-2'>
        <span className='profile-jobskill me-2 p-2'>{skill}</span>
      </div>
    ))}
  </div>
))}
         </div>


         
             <div className='edu p-4 mt-3'>
                    <div className='d-flex justify-content-between'>
                           <p className='profile-keys p-1'>Education <i className="bi bi-pencil-fill edit-profile" onClick={handleeducation}></i></p>
                           {/* <p className='write-education'>Add Education</p> */}
                     </div><hr/>
                     {profileData.map((data, dataIndex) => {
  
                        const sortedEducation = data.education.slice().sort((a, b) => b.startyear - a.startyear);
                        
                        return (
                            <div key={dataIndex} className='p-2'>
                                {sortedEducation.map((edu, skillIndex) => (
                                    <div key={skillIndex} className='profile p-1'>
                                        <p className='degree-education'>{edu.degree}</p>
                                        <p className='edc-clg'>{edu.collegeName}</p>
                                        <p className='edc-clg'>{edu.startyear} - {edu.passedout}</p>
                                    </div>
                                ))}
                            </div>
                        );
                        })}
          </div>
<div>

</div>

<div className='personal p-4 mt-3'>
                               <p className='personal-details'>Personal details <i className="bi bi-pencil-fill edit-profile"></i></p>
                  <div className="row">
                      <div className="col">
                    <p className='personal-dob'>Date of birth</p>
                    <p className='dob-candidate'>12.05.2001</p>
                    <p className='personal-dob'>Gender</p>
                    <p className='dob-candidate'>Male</p>
                  </div>
                  <div className="col">
                  <p className='personal-dob'>Location</p>
                    <p className='dob-candidate'>Chennai</p>
                    <p className='personal-dob'>Job Role</p>
                    <p className='dob-candidate'>React js Developer</p>
                    
                  </div>

</div>
</div>
<div>
</div>


 
    <div className='profile-table mt-3 p-3'>
    <p className='profile-key p-3'>Languages Known<i className="bi bi-pencil-fill edit-profile"></i></p><hr/>
    <table className='w-100'>
      <thead   className='text-center'>
        <tr >
          <th></th>
          <th>Proficiency</th>
          <th>Read</th>
          <th>Write</th>
          <th>Speak</th>
        </tr>
      </thead>
      <tbody className='text-center'> 
        {languages.map(language => (
          <tr key={language.id}>
            <td>{language.name}</td>
            <td>{language.proficiency}</td>
            <td><input type="checkbox" checked={language.read} onChange={() => handleCheckboxChange(language.id, 'read')} /></td>
            <td><input type="checkbox" checked={language.write} onChange={() => handleCheckboxChange(language.id, 'write')} /></td>
            <td><input type="checkbox" checked={language.speak} onChange={() => handleCheckboxChange(language.id, 'speak')} /></td>
          </tr>
        ))}
      </tbody>
    </table>
          </div>
</div>
<Modal
            show={modalShow}
            size='lg'
            bg="Secondary"
            onHide={handleCloseModal}
            backdrop="static"
            keyboard={false}>
          <Modal.Header closeButton>
          <Modal.Title>Edit Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {showProfile? <ProfileDetails handleCloseModal={handleCloseModal}/>:" "}
            {showUpload?  <Form  onSubmit={uploadSubmit}>
                              <Form.Group controlId="formFile" as={Col} md="5" className="mb-3">
                               <Form.Label>Upload CV</Form.Label>
                              <Form.Control type="file" 
                              // onChange={(e) => setFieldValue('file', e.target.files[0])}
                                accept=".pdf, .doc, .docx" 
                                ref={fileInputRef} className='mt-3'
                              />
                            </Form.Group>
                            <div className='d-flex' style={{justifyContent:'space-evenly'}}>
                               <Button type="submit">Submit</Button>
                           </div>
                          </Form>: ''}
              {showSummary? 
                                 <ProfileSummary handleCloseModal={handleCloseModal}  /> : " "
              }
               {showSkills? 
                                <SkillInput handleCloseModal={handleCloseModal}/> : " "
              }
              {!showEducation? 
                            <Education handleCloseModal={handleCloseModal}/>    : " "
              }
                 
        </Modal.Body>
          </Modal>
          <Row className="position-fixed top-0 end-0 p-3">
        <Col xs={10}>
        {delFeedBack? <Toast bg='danger' onClose={handleToastClose} show={showToast} delay={3000} autohide>
            <Toast.Header> 
             <strong className="me-auto">Deleted</strong> 
              
            </Toast.Header>
            <Toast.Body>Cv Deleted Sucessfully</Toast.Body>
          </Toast>: " "}
         
        </Col>
      </Row>
       
</>     
  )
}

export default CandidateProfile