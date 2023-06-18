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

// const element = <FontAwesomeIcon icon={faCoffee} />

// ReactDOM.render(element, document.body)

function Footer() {
  let backgroundColor = { backgroundColor: " rgba(0, 0, 0, 0.219)" };
  let list = { listStyleType: "none" };
  let justifyContent = { justifyContent: "space-between" };

  let footerText = {
    textDecoration: "none",
    fontSize: "15px",
    color: " rgb(26, 26, 97)",
    textAlign: "justify",
  };

  let textDecoration = {
    textDecoration: "none",
    paddingLeft: "20px",
    fontSize: "20px",
    color: " rgb(26, 26, 97)",
  };

  let logoWidth = { width: "200px"};

  return (
    <>
      <footer className="mt-5 mb-1 shadow w-100 rounded-top-3" style={backgroundColor}>
        <div className="row justify-content-center ">

          <div className="col-sm-12 col-md-2 d-flex align-items-center justify-content-center mb-3">
            <img style={logoWidth} src={logo} alt="" />
          </div>
          <div className="col-sm-12 col-md-3 pt-5">
            <ul style={list}>
              <h4>Discover</h4>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> About Us
                </a>
              </li>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> Awareness Drives
                </a>
              </li>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> Smart Traffic Management
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-3 pt-5">
            <ul style={list}>
              <h4>Information</h4>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> Home
                </a>
              </li>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> Contact Us
                </a>
              </li>
            </ul>
          </div>

          <div className="col-sm-12 col-md-4 pt-5">
            <ul style={list}>
              <h4>Contact Us</h4>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> Mumbai Traffic Police
                  Headquarters,worli, Mumbai
                </a>
              </li>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> 022-24940303
                </a>
              </li>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight /> 8454999999
                </a>
              </li>
              <li>
                <a style={footerText} href="./aboutus.js">
                  <FaArrowAltCircleRight />{" "}
                  cp.mumbai.jtpc.traf@mahapolice.gov.in
                </a>
              </li>
            </ul>
            
            <div>
              <a className=" ms-5 me-5"
                style={textDecoration}
                href="https://www.instagram.com/mumbaipolice/?hl=en"
              >
                <FaInstagram />
              </a>
              <a className="me-5" style={textDecoration} href="https://twitter.com/MumbaiPolice">
                <FaTwitter />
              </a>
              <a className="me-5"
                style={textDecoration}
                href="https://www.youtube.com/@MumbaiPoliceYoutube"
              >
                <FaYoutube />
              </a>
              <a
                style={textDecoration}
                href="https://goo.gl/maps/Jn8FRrDApqFemjHh6"
              >
                <FaMapMarkerAlt />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
