import React from 'react';

const Projects = () => {
  return (
    <>
      <div>
        <div className='text-center'>
          <h1 className='animate__animated animate__backInLeft my-3'>PROJECTS</h1>
        </div>
        <div className="card-header">
          <ul className="nav nav-pills card-header-pills justify-content-center">
            <li className="nav-item">
              <a className="nav-link" activeclassname='is-active' href="#">All</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" activeclassname='is-active' href="#">Angular</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" activeclassname='is-active' href="#">React</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" activeclassname='is-active' href="#">Nodejs</a>
            </li>
          </ul>
        </div>
        <div className=" text-center">
          <div className="row">
            <div className="col-sm-6">
              <div className="card box effect5">
                <img src="image/contact_img.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">G4S-DWP</h5>
                  <span class="badge text-bg-secondary mx-1">React.js</span>
                  {/* <span class="badge text-bg-secondary mx-1">Firebase</span> */}
                  <span class="badge text-bg-secondary">HTML/CSS</span>
                  {/* <span class="badge text-bg-secondary mx-1">nodejs</span> */}
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card box effect5">
                <img src="image/contact_img.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">Virtuscan</h5>
                  <span class="badge text-bg-secondary">Angular</span>
                  <span class="badge text-bg-secondary mx-1">Firebase</span>
                  <span class="badge text-bg-secondary">HTML/CSS</span>
                  <span class="badge text-bg-secondary mx-1">node.js</span>
                </div>
              </div>
            </div>
            <div className="col-sm-6">
              <div className="card box effect5">
                <img src="image/contact_img.png" className="card-img-top" alt="..." />
                <div className="card-body text-center">
                  <h5 className="card-title">Site-Map</h5>
                  <span class="badge text-bg-secondary">React.js</span>
                  <span class="badge text-bg-secondary mx-1">Firebase</span>
                  <span class="badge text-bg-secondary">HTML/CSS</span>
                  <span class="badge text-bg-secondary mx-1">nodejs</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Projects;