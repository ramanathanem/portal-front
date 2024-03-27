import React, { useState, useEffect } from 'react';
import '../Style/RecentJobPost.css';
import axios from 'axios';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const RecentJobPost = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/job/getdata');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='recent-bg p-5'>
      <h4 className='recent-title'>Recent Posts</h4>
      <Row>
        {data.map((job) => (
          <Col key={job._id} md={4}>
            <div className='recent-job p-4'>
              <h5 className='job-title'>{job.jobtitle}</h5>
              <h5 className='job-company'>{job.companyName}</h5>
              <h5 className='job-company'><i className="bi bi-dot dot-job"></i> {job.location}</h5>
              <hr />
              {job.primarySkills && job.primarySkills.split('/').map((skill, index) => (
                <p key={index} className='job-skills'><i className="bi bi-dot"></i>{skill}</p>
              ))}
              <p className='job-count p-1 text-center'>Applicants: {job.applicants.length}</p>
              <Link to={`/candidates/${job._id}`} className='d-flex justify-content-center '  style={{ textDecoration: 'none' }}>
                <button className='job-moreinfo no-decoration '>View Applicants</button>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default RecentJobPost;
