import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import { HiSquaresPlus } from 'react-icons/hi2';
import { FaCode } from 'react-icons/fa';


const Skills = () => {
  return (
    <div className="container">
      <div className="row">
        <div className='text-center'>
          <h1 className='animate__animated animate__backInLeft my-5'>MY SKILLS</h1>
        </div>
        <div className="col-sm-6">
          <div className='d-flex'>
            <div className='p-5'>
              <FaPaintBrush size={50} />
            </div>
            <div>
              <h3>Design + Development</h3>
              <p>Clean, modern design - optimized for performence, search engines, and converting users to customers.</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='p-5'>
              <FaCode size={50} />
            </div>
            <div>
              <h3>Technology</h3>
              <p>COmbined all the latest technologies to a progressive wepsite.</p>
            </div>
          </div>
          <div className='d-flex'>
            <div className='p-5'>
              <HiSquaresPlus size={50} />
            </div>
            <div>
              <h3>Always Responsive</h3>
              <p>A responsive design makes your websites accessible to all users, regardlessof their device.</p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="progress justify-content-between" style={{ height: "40px" }}>
            <div className="progress-bar bg-success" role="progressbar" aria-label="Example 20px high" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="" aria-valuemax="100">HTML</div>
            <span className='text-end mt-2'>75%</span>
          </div>
          <div className="progress justify-content-between my-5" style={{ height: "40px" }}>
            <div className="progress-bar bg-danger" role="progressbar" aria-label="Example 20px high" style={{ width: "85%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">CSS</div>
            <span className='text-end mt-2'>85%</span>
          </div>
          <div className="progress justify-content-between my-5" style={{ height: "40px" }}>
            <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">BOOTSTRAP</div>
            <span className='text-end mt-2'>90%</span>
         </div>
          <div className="progress justify-content-between" style={{ height: "40px" }}>
            <div className="progress-bar bg-info" role="progressbar" aria-label="Example 20px high" style={{ width: "65%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">REACT</div>
            <span className='text-end mt-2'>65%</span>
          </div>
          <div className="progress justify-content-between my-5" style={{ height: "40px" }}>
            <div className="progress-bar" role="progressbar" aria-label="Example 20px high" style={{ width: "75%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">ANGULAR</div>
            <span className='text-end mt-2'>75%</span>
          </div>
          <div className="progress justify-content-between" style={{ height: "40px" }}>
            <div className="progress-bar bg-warning" role="progressbar" aria-label="Example 20px high" style={{ width: "80%" }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">NODEJS</div>
            <span className='text-end mt-2'>80%</span>
          </div>
        </div>
      </div>
      <hr/>
    </div>
  )
}

export default Skills