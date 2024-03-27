import React, { useState, useEffect } from 'react';
import { Form, Button, Col ,Row,Toast} from 'react-bootstrap';
import axios from 'axios';

function ProfileSummary({handleCloseModal}) {
  const [authId, setAuthId] = useState(localStorage.getItem('authId'));
  const [summary, setSummary] = useState('');
 

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://portal-backend-w2dr.onrender.com/profile/specificprofile/${authId}`);
      setSummary(response.data.profileSummary);
    } catch (error) {
      console.log("Error occurred while fetching profile data:", error.message);
    }
  };

  const handleSummaryChange = (event) => {
    setSummary(event.target.value);
  };

  const handleSummarySubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`https://portal-backend-w2dr.onrender.com/profile/summary/${authId}`, { summary });
      if (response.status === 201) {
        handleCloseModal()
      }
    } catch (error) {
      console.error('Error sending profile summary:', error);
    }
  };

 
  return (
    <div>
      <Form onSubmit={handleSummarySubmit}>
        <Form.Group className="mb-3" as={Col} md="12" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Profile Summary</Form.Label>
          <Form.Control
            as="textarea"
            name="summary"
            value={summary}
            onChange={handleSummaryChange}
            rows={4}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
    </div>
  );
}

export default ProfileSummary;
