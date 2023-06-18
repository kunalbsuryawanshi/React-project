import accident from "../images/accident.jpg";
import carBreakDown from "../images/carbreakdown.jpg";
import roadRage1 from "../images/roadrage1.jpg";
import roadConstruction from "../images/roadconstruction.jpg";
import oilSpill from "../images/oilspill.jpg";
import waterLogging from "../images/waterlogging.jpg";
import treeFall from "../images/treefall.jpg";
import otherIncident from "../images/otherincident.jpg";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
function Incident() {
  return (
    <>
     <NavigationBar/>
      <h3 className="text-center mt-5">
        <span className="text-light bg-danger p-2 rounded-start-3 shadow-lg">
          Incident
        </span>
        <span className="text-light bg-success p-2 rounded-end-3 shadow-lg">
          Report
        </span>
      </h3>
      <div className="row w-100 justify-content-center mt-5">
        <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
          <Link to={"/Registration"} className="text-decoration-none">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={accident}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">ACCIDENT</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
          <Link to={"/Registration"} className="text-decoration-none">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={carBreakDown}
                className="card-img-top border border-bottom"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">VEHICLE REPORT</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
          <Link to={"/Registration"} className="text-decoration-none">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={roadRage1}
                className="card-img-top border border-bottom"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">ROAD RAGE</p>
              </div>
            </div>
          </Link>
        </div>
      </div>

      <div className="row w-100 justify-content-center mt-5">
        <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
          <Link to={"/Registration"} className="text-decoration-none">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={roadConstruction}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">ROAD CONSTRUCTION</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
          <Link to={"/Registration"} className="text-decoration-none">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={oilSpill}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">OIL SPILL</p>
              </div>
            </div>
          </Link>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
          <Link to={"/Registration"} className="text-decoration-none">
            <div className="card shadow" style={{ width: "18rem" }}>
              <img
                src={waterLogging}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <p className="card-text text-center">WATER LOGGING</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <div className="row w-100 justify-content-center mt-5 mb-5">
          <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src={treeFall}
                  className="card-img-top border border-bottom"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">TREE FALL</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{ width: "18rem" }}>
                <img
                  src={otherIncident}
                  className="card-img-top border border-bottom"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">OTHER</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Incident;
