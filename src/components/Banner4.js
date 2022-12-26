import React from 'react';
import google from '../assets/google.svg';

const Banner4 = () => {
  return (
    <div>
        
    <div className="container">
      <div className="row px-4">
        <div className="col-6">
          <h1 className="how font-weight-bold ms-5">Featured Jobs</h1>
        </div>

        <div className="col-6 text-end">
          <button className="yazimor btn" type="button">Explore Now</button>
        </div>

        <div
          className="card mx-5 shadow-lg p-3 mb-5 m-5 bg-white rounded"
          style={{width: "20rem"}}
        >
          <img src={google} className="google card-img-top" alt="google" />
          <p className="ms-3">Google Inc</p>
          <div className="card-body">
            <h5 className="ara card-title mt-1">Product Designer</h5>
            <div className="minik d-flex align-items-center mb-4 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                />
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              <span className="tag tag-teal">USA</span>
            </div>
            <p className="card-text">
              We are looking for Enrollment Advisors who are looking to take
              30-35 appointments per week. All leads are pre-scheduled
            </p>
            <div className="d-md-flex d-flex">
              <button
                type="button"
                className="btn-sm save me-5"
                style={{backgroundColor: "#cab8e8", color: "white"}}
              >
                APPLY NOW
              </button>
              <button type="button" className="save btn-sm justify-content-end">
                SAVE IT
              </button>
            </div>
          </div>
        </div>
        <div
          className="card mx-5 shadow-lg p-3 mb-5  m-5 bg-white rounded"
          style={{width: "20rem"}}
        >
          <img src={google} className="google card-img-top" alt="google" />
          <p className="ms-3">Google Inc</p>
          <div className="card-body">
            <h5 className="ara card-title mt-1">Product Designer</h5>
            <div className="minik d-flex align-items-center mb-4 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                />
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              <span className="tag tag-teal">USA</span>
            </div>
            <p className="card-text">
              We are looking for Enrollment Advisors who are looking to take
              30-35 appointments per week. All leads are pre-scheduled
            </p>
            <div className="d-md-flex d-flex">
              <button
                type="button"
                className="btn-sm save me-5"
                style={{backgroundColor: "#cab8e8", color: "white"}}
              >
                APPLY NOW
              </button>
              <button type="button" className="save btn-sm justify-content-end">
                SAVE IT
              </button>
            </div>
          </div>
        </div>
        <div
          className="card mx-5 shadow-lg p-3 m-5 mb-5 bg-white rounded"
          style={{width: "20rem"}}
        >
          <img src={google} className="google card-img-top" alt="google" />
          <p className="ms-3">Google Inc</p>
          <div className="card-body">
            <h5 className="ara card-title mt-1">Product Designer</h5>
            <div className="d-flex align-items-center mb-4 mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                className="bi bi-geo-alt"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"
                />
                <path
                  d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
                />
              </svg>
              <span className="tag tag-teal">USA</span>
            </div>
            <p className="card-text">
              We are looking for Enrollment Advisors who are looking to take
              30-35 appointments per week. All leads are pre-scheduled
            </p>
            <div className="d-md-flex d-flex">
              <button
                type="button"
                className="btn-sm save me-5"
                style={{backgroundColor: "#cab8e8", color: "white"}}
              >
                APPLY NOW
              </button>
              <button type="button" className="save btn-sm justify-content-end">
                SAVE IT
              </button>
            </div>
          </div>
        </div>

        <div className="son container-fluid text-center justif-center">
          <div className="row">
            <div className="col-12">
              <h1 className="yazi">MOST COMPREHE JOB PORTAL</h1>
              <h5 className="mt-5">
                WE MUST EXPLAIN TO YOU HOW ALL THIS MISTAKEN IDEA OF DENOUNCING
              </h5>
            </div>
            <div className="mt-5">
              <button type="button" className="btn btn-lg border border-white mx-4 p-4">
                REGISTER
              </button>
              <button type="button" className="btn btn-lg border border-white mx-4 p-4">
                LOG IN
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    </div>
    
  )
}

export default Banner4