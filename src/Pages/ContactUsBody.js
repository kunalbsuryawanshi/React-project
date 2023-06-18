import {
  FaAddressCard,
  FaBlenderPhone,
  FaEnvelopeOpen,
  FaEnvelopeOpenText,
  FaFileInvoice,
  FaPhone,
  FaPhoneAlt,
  FaPhoneSquare,
  FaRegAddressBook,
  FaRegEnvelope,
} from "react-icons/fa";
import contactus from "../images/contactus.jpg";

function ContactUsBody() {
  return (
    <>
      <div className="card text-bg-dark">
        <img src={contactus} className="card-img" alt="..." />
        <div className="card-img-overlay">
          <h5 className="card-title">GET IN TOUCH TODAY</h5>
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
      </div>
      <div
        style={{ backgroundColor: "white" }}
        className="d-flex justify-content-center vh-100 "
      >
        <div className="container vh-100">
          <div
            className="row w-100 alert alert-info shadow-lg justify-content-center align-items-center rounded-3"
            style={{ marginTop: "60px" }}
          >
            <div className="col-sm-12 col-md-6 me-1 pb-2 text-dark">
              Mumbai Traffic Police
            </div>
            <div className="col-sm-12 col-md-6 me-1 pb-2">
              <div>
                <FaPhoneAlt />
                <a
                  style={{ textDecoration: "none", paddingLeft: "10px" }}
                  href=""
                >
                  022-24940303
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 me-1 pb-2">
              <div>
                <FaPhoneAlt />
                <a
                  style={{ textDecoration: "none", paddingLeft: "15px" }}
                  href=""
                >
                  8454999999
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 me-1 pb-2">
              <div>
                <FaRegEnvelope/>
                <a
                  style={{ textDecoration: "none", paddingLeft: "15px" }}
                  href=""
                >
                  cp.mumbai.jtpc.traf@mahapolice.gov.in
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 me-1 pb-2">
              <div>
                <FaRegEnvelope/>
                <a
                  style={{ textDecoration: "none", paddingLeft: "15px" }}
                  href=""
                >
                  multimediacell.traffic@mahapolic.gov.in
                </a>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 me-1 pb-2 d-flex align-items-center">
              <FaRegAddressBook/>
              <a
                style={{ textDecoration: "none",paddingLeft: "15px" }}
                href="https://goo.gl/maps/53Xrr9yDacC5PU8ZA"
              >
                Mumbai Traffic Police Headquarters, Sir Pochkhanwala Road,
                worli, Mumbai
              </a>
            </div>
            <div className="col-sm-12 col-md-6 mt-5 d-flex justify-content-center mb-3">
              <img
                className="rounded-3 shadow"
                src="https://www.tatamotors.com/wp-content/themes/tatamotors_2019/images/world_map.gif"
                alt="World Map - Tata Motor"
                title="World Map - Tata Motor"
              />
            </div>
            <footer className="mt-2 p-2 mb-1 d-block">
              <div
                className="row align-items-center"
                style={{ justifyContent: "space-between" }}
              >
                <div className="col-sm-4 col-md-3 text-center mt-3">
                  © MUMBAI TRAFFIC POLICE
                </div>
                <div className="col-sm-2 col-md-2 mt-2 d-flex justify-content-center">
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.instagram.com/mumbaipolice/?hl=en"
                  >
                    <i className="fab fa-instagram text-dark fs-5"></i>
                  </a>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://twitter.com/MumbaiPolice"
                  >
                    <i className="fa-brands fa-twitter fs-5 text-dark ps-3"></i>
                  </a>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://www.youtube.com/@MumbaiPoliceYoutube"
                  >
                    <i className="fa-brands fa-youtube fs-5 text-dark ps-3"></i>
                  </a>
                  <a
                    style={{ textDecoration: "none" }}
                    href="https://goo.gl/maps/Jn8FRrDApqFemjHh6"
                  >
                    <i className="fa-sharp fa-solid fa-location-dot fs-5 text-dark ps-3"></i>
                  </a>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUsBody;
