import React from 'react';
import { FaPaintBrush } from 'react-icons/fa';
import { HiSquaresPlus } from 'react-icons/hi2';
import { FaCode } from 'react-icons/fa';
import { data } from '../../shared/data';

const Skills = () => {
  const { skills: { title, tech, lang } } = data;
  return (
    <div className="container">
      <div className="row">
        <div className='text-center'>
          <h1 className='animate__animated animate__backInLeft my-5'>{title}</h1>
        </div>
        <div className="col-sm-6">
          {
            tech && tech.map((t, i) => {
              return (
                <div key={i}>
                  <div className='d-flex'>
                    <div className='p-5'>
                      {/* <span><t.iconLink size={50} /></span> */}
                    </div>
                    <div>
                      <h3>{t.title}</h3>
                      <p>{t.description}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="col-sm-6">
          {
            lang && lang.map((l, i) => {
              return (
                <div key={i}>
                  <div className="progress justify-content-between mt-4" style={{ height: "40px" }}>
                    <div className="progress-bar bg-success" role="progressbar" aria-label="Example 20px high" style={{ width: "90%" }} aria-valuenow="25" aria-valuemin="" aria-valuemax="100">{l.name}</div>
                    <span className='text-end mt-2'>{l.percentage}</span>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
      <hr />
    </div>
  )
}

export default Skills