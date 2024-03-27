import React from 'react'
import calls from  "../assets/Images/calls.svg"
import city from "../assets/Images/city.svg"
import member from "../assets/Images/members.svg"
import "../Style/Card.css"
 const Card = () => {
  return (
    <div className="container mt-4 mb-5">
    <div className="row">
      <div className="col-sm">
      <div className="card" id='shadow' >
  <img src={calls}  id='img-bg' />
  <div className='text-center'>
    <p className='call-job'>34L+  </p>

<p className='interview-type'>Interviews per month</p></div>
  <div className="card-body">
   
  </div>
</div>
      </div>
      <div className="col-sm">
      <div className="card" id='shadow'  >
  <img src={member}  id='img-bg'/>
  <div className='text-center'>
    <p className='call-job'> 2Cr+</p>
<p className='interview-type'>Qualified Candidates </p>
</div>
  <div className="card-body">
  
   
  </div>
</div>
      </div>
      <div className="col-sm">
      <div className="card" id='shadow' >
  <img src={city}  id='img-bg'/>
  <div className='text-center' >
    <p className='call-job'>750+ </p>

<p className='interview-type'>Cities in India </p>
</div>
  <div className="card-body">

   
  </div>
</div>
      </div>
    </div>
  </div>
  )
}

export default Card