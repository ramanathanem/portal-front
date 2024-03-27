import React from 'react'
import "../Style/Home.css"
import { Link } from 'react-router-dom'
import { Resume } from './Resume'
import { Footer } from './Footer'
import Reviewslider from './Reviewslider'
import JobsCategory from './JobsCategory'
import Hiringnow from './Hiringnow'
import Card from './Card'
import { Jobcarts } from './Jobcarts'

export const Home = ({setAdmin}) => {
  return (
    <div>
    <div className='image text-center'>
        <div className='image-overlay '>
          <div className='p-4'>
            <p className='txt'id='jobsfont'>We are Hiring!!!</p>
            <h1 className='text mt-5' id='jobsfont'style={{fontSize:"40px"}}>Your Dream Job Awaits. Register in a Flash!</h1>
            <Link to="/forms"><span> <button className='butt' id='jobsfont' style={{fontSize:"15px"}}>Upload Your CV</button> </span> </Link>
            <div className='forms-group btn1 '>
        <button className='btns'><i className='fa fa-search'></i></button>
        <div>
        <input type='text' className='home-search' placeholder='Search something...' id='searchtext'/>
        </div>
        </div>
        </div>
    </div>
    </div>
     {/* <Hiringnow/> */}
     <Jobcarts/>
    <JobsCategory/>
    <Card/>
<Resume/>
<Reviewslider/>
<Footer setAdmin={setAdmin}/>
    </div>
  )
}

