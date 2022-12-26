import React, { Component } from "react";

const Menu = () => {
  return (
    <nav
      className="container navbar navbar-expand-lg navbar-light mb-5 mt-5 h1"
      style={{ fontSize: "23px", position: "relative" }}
    >
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-apple"
          viewBox="0 0 16 16"
        >
          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
          <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
        </svg>
      </div>
      <a
        className="navbar-brand text-dark ms-2"
        style={{ fontSize: "25px"  }}
        href="#"
      >
        Find
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <a className="nav-link text-dark mx-2" href="#">
              HOME
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark mx-2" href="#">
              ABOUT
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark mx-2" href="#">
              JOBS
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link text-dark mx-2" href="#">
              SUPPORT
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <div classNameName="col-md-3 text-end">
            <button
              type="button"
              className="btn me-2 text-dark fw-bold p-3"
              style={{ backgroundColor: "#fff" }}
            >
              LOGIN
            </button>
            <button
              type="button"
              className="btn fw-bold text-white p-3"
              style={{ backgroundColor: "#cab8e8", width: "125px" }}
            >
              SIGN UP
            </button>
          </div>
        </form>
      </div>
    </nav>

    // <div classNameName="col-lg-12 col-md-6 col-sm-4">

    //   <nav

    //     classNameName="navbar navbar-expand-lg bg-white mb-5 p-5 h1"
    //     style={{ fontSize: "50px" }}
    //   >
    //     <div classNameName="container">
    //       <div>
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="30"
    //           height="30"
    //           fill="currentColor"
    //           classNameName="bi bi-apple "
    //           viewBox="0 0 16 16"
    //         >
    //           <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
    //           <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43Zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282Z" />
    //         </svg>
    //       </div>
    //       <div>
    //         <a classNameName="navbar-brand text-dark ms-4" href="#">
    //           LOGO
    //         </a>
    //       </div>

    //       <div

    //         classNameName="navbar-collapse fs-5"
    //         id="navbarSupportedContent"
    //         style={{ marginLeft: "20%" }}
    //       >
    //         <ul classNameName="navbar-nav me-auto ">
    //           <li classNameName="nav-item">
    //             <a classNameName="nav-link text-dark" aria-current="page" href="#">
    //               HOME
    //             </a>
    //           </li>
    //           <li classNameName="nav-item">
    //             <a classNameName="nav-link text-dark " href="#">
    //               ABOUT
    //             </a>
    //           </li>

    //           <li classNameName="nav-item">
    //             <a classNameName="nav-link text-dark" href="#">
    //               JOBS
    //             </a>
    //           </li>
    //           <li classNameName="nav-item">
    //             <a classNameName="nav-link text-dark" href="#">
    //               SUPPORT
    //             </a>
    //           </li>
    //         </ul>
    //         <div

    //         classNameName="col-md-3 text-end">
    //           <button
    //             type="button"
    //             classNameName="btn me-2 text-dark fw-bold p-3"
    //             style={{ backgroundColor: "#fff" }}
    //           >
    //             LOGIN
    //           </button>
    //           <button
    //             type="button"
    //             classNameName="btn fw-bold text-white p-3"
    //             style={{ backgroundColor: "#cab8e8", width: "125px" }}
    //           >
    //             SIGN UP
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //   </nav>
    // </div>
  );
};

export default Menu;
