import tripleSeat1 from "../images/tripleseat1.jpg";
import noHelmet from "../images/nohelmet.jpg";
import noSeatBelt from "../images/noseatbelt.jpg";
import stopLine from "../images/stopline.jpg";
import noMobile from "../images/nomobile.jpg";
import noParking from "../images/noparking.jpg";
import fancyPlate1 from "../images/fancyplate1.jpg";
import otherIncident from "../images/otherincident.jpg";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
function Voilation() {
  return (
    <>
     <NavigationBar/>
      <div>
        <h3 className="text-center text-success mt-5">
          <span className="text-light bg-danger p-2 rounded-start-3 shadow-lg">
            Violation
          </span>
          <span className="text-light bg-success p-2 rounded-end-3 shadow-lg">
            &nbsp;Report&nbsp;
          </span>
        </h3>
        <div className="row justify-content-center mt-5">
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={tripleSeat1}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">TRIPLE SEAT</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={noHelmet}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">NO HELMET</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={noSeatBelt}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">NO SEAT BEALT</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={stopLine}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">STOP LINE</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <div className="row justify-content-center mt-5 mb-5">
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={noMobile}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">MOBILE WHILE DRIVING</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={noParking}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">WRONG PARKING</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={fancyPlate1}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text text-center">FANCY PLATE</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-3 d-flex justify-content-center">
            <Link to={"/Registration"} className="text-decoration-none">
              <div className="card shadow" style={{width: "18rem"}}>
                <img
                  src={otherIncident}
                  className="card-img-top"
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
export default Voilation;
