import React from "react";
import man from "../assets/man.png";

const Header = () => {
  return (
    <div>
      {" "}
      <div className="container mb-5">
        <div className="row align-items-center justif-center">
          <div className="col-md-6">
            <strong>
              <h1 className="yazi" style={{ marginTop: "50px" }}>
                Find The Perfect Job <br />
                That You Deserve
              </h1>
            </strong>

            <div className="d-flex mt-5 mb-3 shadow-lg p-3 mb-5 bg-white rounded ">
              <input
                className=" border border-0"
                style={{ width: "250px" }}
                type="select"
                placeholder="Job Title"
              ></input>
              <select className=" border border-0" style={{ width: "180px" }}>
                <option value="ülke">Singapur</option>
                <option value="saab">England</option>
                <option value="mercedes">Germany</option>
                <option value="audi">Tayland</option>
              </select>
              <button
                className=" border border-0 btn fw-bold text-white p-3"
                style={{ backgroundColor: "#cab8e8", width: "200px" }}
              >
                SEARCH
              </button>
            </div>
            <p className="mb-5 fst-italic text-muted">
              Type your keyword, then click search to find your perfect job.
            </p>
            <div
              className="d-flex flex-row mt-5"
              style={{ marginRight: "30px" }}
            >
              <h1
                className="me-5"
                style={{ color: "#9df5e3", fontSize: "50px" }}
              >
                6M+
              </h1>
              <h1
                className="me-5"
                style={{ color: "#9df5e3", fontSize: "50px" }}
              >
                10K+
              </h1>
              <h1
                className="me-5"
                style={{ color: "#9df5e3", fontSize: "50px" }}
              >
                2M+
              </h1>
            </div>
            <div className="d-flex flex-row">
              <p className="text-secondary" style={{ marginRight: "80px" }}>
                Million daily <br />
                active users
              </p>
              <p className=" text-secondary" style={{ marginRight: "80px" }}>
                Million daily <br />
                active users
              </p>
              <p className=" text-secondary" style={{ marginRight: "80px" }}>
                Million daily <br />
                active users
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={man} width="100%" height="100%" />
          </div>
        </div>
        <div className="col-12 mt-3">
          <h5 className="ara">Get hired in top companies</h5>
        </div>

        <div className=" container">
          <div className="row row-cols-auto ">
            <div className="col mx-3">
              <button
                type="button"
                className="buttons btn btn-outline-success btn-lg"
              >
                MakeLess
              </button>
            </div>
            <div className="col mx-3">
              <button
                type="button"
                className="buttons btn btn-outline-success btn-lg"
              >
                Dorfus
              </button>
            </div>
            <div className="col mx-3">
              <button
                type="button"
                className="buttons btn btn-outline-success btn-lg"
              >
                <i>askimat</i>
              </button>
            </div>

            <div className="col mx-3">
              <button
                type="button"
                className="buttons btn btn-outline-success btn-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-balloon mx-1"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z"
                  />
                </svg>
                coworks
              </button>
            </div>
            <div className="col mx-3">
              <button
                type="button"
                className="buttons btn btn-outline-success btn-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-balloon mx-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 9.984C10.403 9.506 12 7.48 12 5a4 4 0 0 0-8 0c0 2.48 1.597 4.506 4 4.984ZM13 5c0 2.837-1.789 5.227-4.52 5.901l.244.487a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.244-.487C4.789 10.227 3 7.837 3 5a5 5 0 0 1 10 0Zm-6.938-.495a2.003 2.003 0 0 1 1.443-1.443C7.773 2.994 8 2.776 8 2.5c0-.276-.226-.504-.498-.459a3.003 3.003 0 0 0-2.46 2.461c-.046.272.182.498.458.498s.494-.227.562-.495Z"
                  />
                </svg>
                greneer
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
