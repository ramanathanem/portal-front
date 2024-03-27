import React from 'react'
import hr1 from "../assets/Images/hr1.jpg"
import Bpo from "../assets/Images/Bpo.jpg"
import It from "../assets/Images/It.jpg"
import sale from "../assets/Images/sales.png"
import customer from "../assets/Images/cus.png"
import account from "../assets/Images/account.png"
import digital from "../assets/Images/digital2.jpg"
import health from "../assets/Images/health.jpg"
import manifacture from "../assets/Images/menifacture.jpg"
import skin from "../assets/Images/skin.jpg"
import ms2 from "../assets/Images/ms2.png"
import operation from "../assets/Images/operation.jpg"
import { Link } from 'react-router-dom'
import "../Style/Jobrole.css"
const Jobrole = () => {
    const Data = [
        { id: 1, name: 'Human Resoruce', img: hr1 , level:'Midlevel',ctc:"$600-700", path:"/Hr"},
        { id: 2, name: 'It', img: It , level:'Midlevel',ctc:"$600-700",path:"/It"},
        { id: 3, name: 'Bpo', img: Bpo , level:'Midlevel',ctc:"$600-700",path:"/Bpo"},
        { id: 4, name: 'Customer service', img: customer , level:'Midlevel',ctc:"$600-700",path:"/Cs"},
        { id: 5, name: 'Account', img: account, level:'Midlevel',ctc:"$600-700" ,path:"/Account"},
        { id: 6, name: 'Digital Marketing', img: digital , level:'Midlevel',ctc:"$600-700", path:"/Digital"},
        { id: 7, name: 'Health care', img: health, level:'Midlevel',ctc:"$600-700" ,path:"/Health"},
        { id: 8, name: 'Manifacturing', img: manifacture , level:'Midlevel',ctc:"$600-700",path:"/Manifcutre"},
        { id: 9, name: 'Skin clinic', img: skin , level:'Midlevel',ctc:"$600-700",path:"/Skin"},
        { id: 10, name: 'Sales', img: sale, level:'Midlevel' ,ctc:"$600-700",path:"/Sale"},
        { id: 11, name: 'Operation', img: operation, level:'Midlevel',ctc:"$600-700" , path:"/Operation"},
        { id: 12, name: 'Miscellaneous', img: ms2 , level:'Midlevel',ctc:"$600-700",path:"/Ms"},
      ];
  return (
    <div>
         <h1 className='text-center mt-5' id='jobsfont' >
         JOBS YOU MAY BE INTERESTED IN
         
      </h1>
      
      <div className='container mt-5 text-center'>
      <button  id='jobsfont' className='btn btn-outline-primary me-3 mb-3 text-center' style={{borderRadius:"20px", fontSize:'17px'}}>Hot jobs</button>
        <button  id='jobsfont' className='btn btn-outline-primary me-3 mb-3 text-center' style={{borderRadius:"20px", fontSize:'17px'}}>Recent jobs</button>
        <button  id='jobsfont' className='btn btn-outline-primary me-3 mb-3 ' style={{borderRadius:"20px",fontSize:'17px'}}>Popular jobs</button>
        <div className='row mb-4 '>
          {Data.map((data) => (
            <div className='col-md-3' key={data.id}>
              <div className='card mb-3'>
                <div className='card-body'>
                 
                  <h5 id='jobsfont' style={{fontSize:"17px"}} className='card-title'>{data.name}</h5>
                  <img src={data.img} alt={data.name} />
                  <h6  id='jobsfont' style={{fontSize:"15px"}} className='card-title'>
                    <i className="bi bi-suitcase-lg-fill me-1" id='level'></i>{data.level}</h6>
                  <h6 className='card-title'>{data.ctc}</h6>
                  <h6>
                    {/* Use Link component to create a link to the specified path */}
                    <Link to={data.path}>
                      <button className='btn btn-outline-secondary'  id='jobsfont' style={{fontSize:"15px"}}>Full Time</button>
                    </Link>
                  </h6>
                
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobrole