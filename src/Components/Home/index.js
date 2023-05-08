import React, { Fragment } from 'react';
import { SlSocialFacebook, SlSocialLinkedin } from 'react-icons/sl';
import { GrInstagram } from 'react-icons/gr';
import { data } from '../../shared/data';

const Home = () => {
  const { profile: { title, profession, description, imageUrl, title_2, icons } } = data;

  return (
    <Fragment>
      <div className="container align-items-center" style={{ marginTop: 'auto' }}>
        <div className="row">
          <div className="col">
            <h5 className='text-muted animate__animated animate__backInLeft'>{title}</h5>
            <h1 className='my-4'>Hi, I' am <span className='color'>Akib Jawed</span><br />{profession}</h1>
            {/* <p>{description}</p> */}
            <div className="row mt-5">
              <div className='text-muted'>
                <h6>{title_2}</h6>
              </div>
              <div className="col mt-2">
                {
                  icons && icons.map((p, i) => {
                    return (
                      <div key={i}>
                        <a type="button" href={ p.fabLink } className="btn btn-primary p-3 button"><SlSocialFacebook /></a>
                        <a type="button" href={ p.instaLink } className="btn btn-primary p-3 mx-3 button"><GrInstagram /></a>
                        <a type="button" href={ p.linkedInLink } className="btn btn-primary p-3 button"><SlSocialLinkedin /></a>
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className="col shadow">
            <img src={ imageUrl } alt='profile' height={600} />
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  )
}

export default Home