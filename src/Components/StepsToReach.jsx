import React from 'react'
import step1 from "../assets/Images/step1.svg"
import step2 from "../assets/Images/step2.svg"
import step3 from "../assets/Images/step3.svg"
import "../Style/StepsToReach.css"
export const StepsToReach = () => {
  return (
    <div>
        <h1 className='mt-4 ms-5 mb-3' id='head'>Get started in 3 easy steps</h1>
        <div className="container">
  <div className="row">
    <div className="col-sm">
      <img src={step1}/>
      <h3 className='ms-4'>Post a Job</h3>
  
      <h4 className='mt-3' id='steps'>Tell us what you need in a candidate in just 5-minutes.</h4>
    </div>
    <div className="col-sm">
    <img src={step2}/>
    <h3 className='ms-4'>Get Verified</h3>
    <h4 id='steps'>Our team will call to verify your employer account</h4>
    </div>
    <div className="col-sm">
    <img src={step3}/>
    <h3 className='ms-4'>Get calls Hire</h3>
    <h4 id='steps'>You will get calls from relevant candidates within one hour or call them directly from our candidate database.</h4>
    </div>
  </div>
</div>
    </div>
  )
}
