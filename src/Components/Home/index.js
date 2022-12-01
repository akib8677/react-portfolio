import React, { Fragment } from 'react';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';
import { GrInstagram } from 'react-icons/gr';

const Home = () => {
  return (
    <Fragment>
      <div className="container align-items-center" style={{ marginTop: 'auto' }}>
        <div className="row">
          <div className="col">
            <h5 className='text-muted animate__animated animate__backInLeft'>WELCOME TO MY WORLD</h5>
            <h1 className='my-4'>Hi, I' am <span className='color'>Akib Jawed</span><br />a Devloper.</h1>
            <p>I use animation as a third dimension by which to simplify experiences and kuiding thro each and every interaction.</p>
            <div className="row mt-5">
              <div className='text-muted'>
                <h6>FIND WITH ME</h6>
              </div>
              <div className="col mt-2">
                <a type="button" href='#' className="btn btn-primary p-3 button"><SlSocialFacebook /></a>
                <a type="button" href='#' className="btn btn-primary p-3 mx-3 button"><GrInstagram /></a>
                <a type="button" href='#' className="btn btn-primary p-3 button"><SlSocialLinkedin /></a>
              </div>
            </div>
          </div>
          <div className="col shadow">
            <img src='image/profile3.jpg' alt='profile' height={600} />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Home