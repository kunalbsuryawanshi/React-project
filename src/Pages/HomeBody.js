import frontImg from "../images/home.jpg";
import eChallan from "../images/echallan.jpg";
import awareness from "../images/awareness.jpg";
import smarTrafficManagement from "../images/smarttrafficmanagement.jpg";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
import Advisory from "./Advisory";
function HomeBody() {
  // let height = {height : "700px"};
  let textDecoration = { textDecoration: "none" };

  return (
    <>
      <NavigationBar />
      <Advisory />
      <div className="row mt-5 shadow ms-2 me-2 justify-content-center align-items-center w-100">
        <div className="col-sm-12 col-md-6 ">
          <img className="w-100" src={frontImg} alt="" />
        </div>
        <div className="col-sm-12 col-md-6 d-flex justify-content-center">
          <span className="text-light bg-danger p-2 rounded-start-4 fs-3 shadow">
            Traffic Complaint
          </span>
          <span className="text-light bg-success p-2 rounded-end-4 fs-3 shadow">
            Registration System
          </span>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div class="row ms-2 mt-5 justify-content-center align-items-center w-100 vh-100">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <div class="card shadow-lg">
              <img src={eChallan} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">E Challan</h5>
                <p class="card-text">
                  A vehicle e-challan is a computer-generated challan being
                  issued to all the traffic defaulters.
                </p>
                <a
                  style={textDecoration}
                  href="https://echallan.parivahan.gov.in/"
                >
                  <input
                    class="form-control bg-warning"
                    type="button"
                    value="Click here"
                  />
                </a>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-3 col-lg-3 ms-2 me-2 mt-2">
            <div class="card shadow-lg">
              <img src={awareness} class="card-img-top" />
              <div class="card-body">
                <h5 class="card-title">Awareness Drives</h5>
                <p class="card-text">
                  It is necessary for everyone to be aware of traffic rules. We
                  make sure to keep reminding people.
                </p>
                <Link style={textDecoration} to={"/AwarenessBody"}>
                  <input
                    class="form-control bg-warning"
                    type="button"
                    value="Read More"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div class="col-sm-12 col-md-3 col-lg-3 mt-2">
            <div class="card shadow-lg">
              <img src={smarTrafficManagement} class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Smart Traffic Management</h5>
                <p class="card-text">
                  It is our responsibility and duty to support and manage a
                  smooth flow of traffic to ease lives of people.
                </p>
                <Link style={textDecoration} to={"/TrafficManagement"}>
                  <input
                    class="form-control bg-warning"
                    type="button"
                    value="Read More"
                  />
                </Link>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default HomeBody;
