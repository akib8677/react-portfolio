import React from 'react';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';
import { GrInstagram } from 'react-icons/gr';
import { ImArrowRight } from 'react-icons/im'

const Contact = () => {
  return (
    <div className="container mt-5">
      <hr/>
      <div className='text-center'>
        <p className='color'>CONTACT</p>
        <h1 className='animate__animated animate__backInLeft'>Contact With Me</h1>
      </div>
      <div className='p-sm-0 mt-4'>
        <div className="row">
          <div className="col-sm-6">
            <div className="card shadow">
              <img src="image/contact_img.png" className="card-img-top p-4" height={270} alt="img" />
              <div className="card-body">
                <h3 className="card-title">Akib Jawed</h3>
                <p className='text-muted'>Web Developer & Designer</p>
                <p className="card-text text-muted">I am available for work. Connect with me via and call in to my account.</p>
                <div className='text-muted'>
                  <span>Phone: +918677065940</span><br />
                  <span>Email: akibjawed.dev@gmail.com</span>
                </div>
                <div>
                  <div className='text-muted mt-3'>
                    <h6>FIND WITH ME</h6>
                  </div>
                  <div className="col mt-3">
                    <a type="button" href='#' className="btn btn-primary p-3 button"><SlSocialFacebook /></a>
                    <a type="button" href='#' className="btn btn-primary p-3 mx-3 button"><GrInstagram /></a>
                    <a type="button" href='#' className="btn btn-primary p-3 button"><SlSocialLinkedin /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <form className='text-muted shadow p-4 fs-6'>
              <div className="row mb-4">
                <div className='col-lg-6 col-md-6  col-sm-12'>
                  <label htmlFor="exampleInputEmail1" className="form-label">YOUR NAME</label>
                  <input type="name" className="form-control p-2" />
                </div>
                <div className='col-lg-6 col-md-6 col-sm-12'>
                  <label htmlFor="exampleInputEmail1" className="form-label">PHONE NUMBER</label>
                  <input type="text" className="form-control p-2" />
                </div>
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">EMAIL</label>
                <input type="email" className="form-control p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputEmail1" className="form-label">SUBJECT</label>
                <input type="text" className="form-control p-2" />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">YOUR MESSAGE</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="8"></textarea>
              </div>
              <a type="submit" href='#' className="btn btn-primary msg-btn fs-6 w-100 button p-3">SEND MESSAGE <ImArrowRight className='mb-1 mr-2'/></a>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact;