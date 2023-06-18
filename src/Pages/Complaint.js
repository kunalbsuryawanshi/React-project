import voilation from "../images/voilation.jpg";
import incidentReport from "../images/incidentreport.jpg";
import { Link } from "react-router-dom";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
function Complaint() {
  return (
    <>
     <NavigationBar/>
      <h3 className="text-center text-success mt-5">
        <span className="text-light bg-danger p-2 rounded-3 shadow">
          Complaint
        </span>
      </h3>
      <div className="row justify-content-center vh-100 mt-5"> 
        <div
          className="col-sm-12 col-md-3 d-flex justify-content-center"
          style={{ height: "200px" }}
        >
          <Link to={"/Voilation"} style={{ textDecoration: "none" }}>
            <div className="card shadow-lg" style={{ width: "18rem" }}>
              <img
                src={voilation}
                className="card-img-top border border-bottom-2"
                alt="..."
              />
              <div className="card-body">
                <h4 className="card-title text-center">Violation Report</h4>
              </div>
            </div>
          </Link>
        </div>
        <div
          className="col-sm-12 col-md-3 d-flex justify-content-center"
          style={{ height: "200px" }}
        >
          <Link to={"/Incident"} style={{ textDecoration: "none" }}>
            <div className="card shadow-lg" style={{ width: "18rem" }}>
              <img src={incidentReport} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-text text-center">Incident Report</h4>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default Complaint;
