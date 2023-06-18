// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "./images/TCR.png";
import {
  faAmericanSignLanguageInterpreting,
  faCoffee,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaArrowAltCircleRight,
  FaBeer,
  FaHome,
  FaInbox,
  FaInstagram,
  FaLocationArrow,
  FaMailBulk,
  FaMailchimp,
  FaMap,
  FaMapMarker,
  FaMapMarkerAlt,
  FaPhoenixFramework,
  FaPhoneAlt,
  FaPhoneSquare,
  FaSearchLocation,
  FaTelegram,
  FaTwitter,
  FaVoicemail,
  FaYoutube,
} from "react-icons/fa";
import AboutUsBody from "./Pages/AboutUsBody";
import { Link } from "react-router-dom";

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

function Footer() {
  let backgroundColor = { backgroundColor: " rgba(0, 0, 0, 0.219)" };
  let list = { listStyleType: "none" };
  let justifyContent = { justifyContent: "space-between" };

  let footerText = {
    textDecoration: "none",
    fontSize: "15px",
    color: "rgb(81,77,80)",
    textAlign: "justify",
  };

  let textDecoration = {
    textDecoration: "none",
    paddingLeft: "20px",
    fontSize: "20px",
    color: " rgb(26, 26, 97)",
  };

  let logoWidth = { width: "200px" };

  return (
    <>
    <div className="vh-100 d-flex align-items-end">
      <footer
        className="mt-5 mb-1 shadow w-100 rounded-top-3 "
        style={backgroundColor}
      >
        <div className="row justify-content-center ">
          <div className="col-sm-12 col-md-2 d-flex align-items-center justify-content-center mb-3">
            <img style={logoWidth} src={logo} alt="" />
          </div>
          <div className="col-sm-12 col-md-3 pt-5">
            <ul style={list}>
              <h4>Discover</h4>
              <li>
                <Link style={footerText} to={"/AboutUsBody"}>
                  <FaArrowAltCircleRight /> About Us
                </Link>
              </li>
              <li>
                <Link style={footerText} to={"/AwarenessBody"}>
                  <FaArrowAltCircleRight /> Awareness Drives
                </Link>
              </li>
              <li>
                <Link style={footerText} to={"/TrafficManagement"}>
                  <FaArrowAltCircleRight /> Smart Traffic Management
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-3 pt-5">
            <ul style={list}>
              <h4>Information</h4>
              <li>
                <Link style={footerText} to={"/HomeBody"}>
                  <FaArrowAltCircleRight /> Home
                </Link>
              </li>
              <li>
                <Link style={footerText} to={"/ContactUsBody"}>
                  <FaArrowAltCircleRight /> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-4 pt-5">
            <ul style={list}>
              <h4>Contact Us</h4>
              <li>
                <Link
                  style={footerText}
                  to={"https://goo.gl/maps/fCuhDSFPkpK9UQ247"}
                >
                  <FaArrowAltCircleRight /> Mumbai Traffic Police
                  Headquarters,worli, Mumbai
                </Link>
              </li>
              <li>
                <Link
                  style={footerText}
                  to={
                    "https://trafficpolicemumbai.maharashtra.gov.in/senior-officer-contacts/"
                  }
                >
                  <FaArrowAltCircleRight /> 022-24940303
                </Link>
              </li>
              <li>
                <Link
                  style={footerText}
                  to={
                    "https://trafficpolicemumbai.maharashtra.gov.in/senior-officer-contacts/"
                  }
                >
                  <FaArrowAltCircleRight /> 8454999999
                </Link>
              </li>
              <li>
                <Link
                  style={footerText}
                  to={
                    "https://trafficpolicemumbai.maharashtra.gov.in/senior-officer-contacts/"
                  }
                >
                  <FaArrowAltCircleRight className="me-1" />
                  cp.mumbai.jtpc.traf@mahapolice.gov.in
                </Link>
              </li>
            </ul>

            <div>
              <Link
                className=" ms-5 me-5"
                style={textDecoration}
                to="https://www.instagram.com/mumbaipolice/?hl=en"
              >
                <FaInstagram />
              </Link>
              <Link
                className="me-5"
                style={textDecoration}
                to="https://twitter.com/MumbaiPolice"
              >
                <FaTwitter />
              </Link>
              <Link
                className="me-5"
                style={textDecoration}
                to="https://www.youtube.com/@MumbaiPoliceYoutube"
              >
                <FaYoutube />
              </Link>
              <Link
                style={textDecoration}
                to="https://goo.gl/maps/Jn8FRrDApqFemjHh6"
              >
                <FaMapMarkerAlt />
              </Link>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </>
  );
}

export default Footer;
