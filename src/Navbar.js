import { Link } from "react-router-dom";
import logo from "./images/TCR.png";

function Navbar() {
  let imgWidth = { width: "120px" };
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg bg-info-subtle shadow">
        <div className="container-fluid">
          <Link className="navbar-brand ps-2" to={"/HomeBody"}>
            <h3>
              <img style={imgWidth} src={logo} alt="" />
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/HomeBody"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/ContactUsBody"}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/AboutUsBody"}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/Complaint"}>
                  Complaint
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/Admin"}>
                  Admin
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to={"/Login"}>
                <input class="btn btn-success" type="button" value="LogIn" />
              </Link>
            </form>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
