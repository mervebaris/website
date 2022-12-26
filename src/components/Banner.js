import React from 'react'

const Banner = () => {
  return (
    <div>
        
    <div className="container mb-5">
      <div className="col-12 mt-5">
        <h1 className="how d-flex justify-content-center">How It Works</h1>
      </div>
      <div
        className="row d-flex flex-row bd-highlight align-items-center justif-center mt-5 mb-5"
      >
        <div className="col-sm-4 rounded-left">
          <div className="basit">
            <svg
             style={{color: "#ffff"}}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star mt-4 ms-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              />
            </svg>
          </div>
          <p className="orta">
            Register<br />
            Your Account
          </p>
          <p className="texks text-secondary ms-4">
            You need to create an accound to <br />
            find the best and preferred job
          </p>
        </div>
        <div className="col-sm-4 rounded-left">
          <div className="basit">
            <svg
             style={{color: "#ffff"}}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star mt-4 ms-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              />
            </svg>
          </div>
          <p className="orta">
            Apply <br />
            For Dream Job
          </p>
          <p className="texks text-secondary ms-4">
            You need to create an accound to <br />
            find the best and preferred job
          </p>
        </div>
        <div className="col-sm-4 rounded-left">
          <div className="basit">
            <svg
              style={{color: "#ffff"}}
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-star  mt-4 ms-4"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z"
              />
            </svg>
          </div>
          <p className="orta">
            Upload <br />
            Your Resume
          </p>
          <p className="texks text-secondary ms-4">
            You need to create an accound to <br />
            find the best and preferred job
          </p>
        </div>
      </div>
    </div>

    </div>
  )
}

export default Banner