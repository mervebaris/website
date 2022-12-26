import React from "react";
import man from "../assets/man.png";

const Banner3 = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row align-items-center justif-center">
          <div className="col-md-6">
            <img src={man} width="90%" height="90%" />
          </div>
          <div className="col-md-6">
            <strong>
              <h1 className="yazi mb-5 mx-5" style={{ marginTop: "50px" }}>
                Help you to get the <br />
                best job that fits you
              </h1>
            </strong>
            <p className="mb-5 mx-5 yazilar">
              Leverage agile frameworks to provide a robust <br />
              synopsis for high level overviews. Iteative approach
            </p>
            <div className="d-flex align-items-center mt-5 mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                fill="currentColor"
                className="bi bi-check-lg mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              <p className="simsek">Bring to the table win-win survival</p>
            </div>
            <div className="d-flex align-items-center mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                fill="currentColor"
                className="bi bi-check-lg mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              <p className="simsek">Bring to the table win-win survival</p>
            </div>
            <div className="d-flex align-items-center mx-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="20"
                fill="currentColor"
                className="bi bi-check-lg mx-2"
                viewBox="0 0 16 16"
              >
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
              </svg>
              <p className="simsek">Bring to the table win-win survival</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner3;
