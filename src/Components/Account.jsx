import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import axios
import "../Style/It.css";
import { Link} from 'react-router-dom';
import FilterUser from './FilterUser';

function Account() {
    const [data, setData] = useState([]);
    

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:5000/job/getdata'); 
            const filteredData = response.data.filter(entry => entry.category === "Account");
            setData(filteredData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className='jobdisplay '>
            <FilterUser  data={data} setData={setData} />
            {data.length == 0? <h6 className='text-center w-100'>No Jobs Found</h6> :
        <div className='container'>
            <div className='row mb-4 ' >
                {data.map((job) => (
                    <div className='col-md-6 p-5' key={job.serialId}>
                        <div className='card mb-3 p-2' style={{ cursor: "pointer" }} >
                            <div className='card-body'>
                                <h5 id='job-role' className='card-title'>{job.jobtitle}</h5>
                                <p id='job-location' className='card-title'><i className="bi bi-geo-alt"></i> {job.location}</p>
                                <div className='row '>
                                    <p id='job-exp' className='col-md-5 p-1 m-1 '>Experience {job.experience} years</p>
                                    <p id='job-type' className='col-md-5 p-1 m-1'>{job.jobtype} <i className="bi bi-heart"></i></p>
                                </div>
                                <div className='row '>
                                  <p className='job-salary col-md-5  p-1 m-1'>UPTO {job.salary} LPA</p>
                                  </div>
                                <div className='job-require mt-3'>
                                {job.primarySkills && job.primarySkills.split('/').map((skill, index) => (
                                        <p key={index}><i className="bi bi-dot"></i>{skill}</p>
                                    ))}
                                </div>
                              
                              <Link to ={`/jobdetails/${job._id}/${job.category}`}>
                              <div className='link_wrapper'>
                              <button className="button-17"> More info</button>
                              </div>
                              </Link>
                           
                               
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>}
        </div>
    );
}

export default Account;
