import aboutus4 from "../images/aboutus4.jpg";
import aboutus1 from "../images/aboutus1.jpg";
import aboutus7_1 from "../images/aboutus7.1.jpg";
import aboutus5 from "../images/aboutus5.jpg";
import aboutus3_1 from "../images/aboutus3.1.jpg";
import aboutus9_1 from "../images/aboutus9.1.jpg";
function AboutUsBody() {
  let textAlign = { textAlign: "justify" };
  let border = { border: "none" };
  let fontSize = { fontSize: "500px" };
  return (
    <>
      <h2 class="ms-5 mt-4 mb-0 text-center">
        <span>
          About <span className="text-success">Us</span>
        </span>
      </h2>
      <div style={border} className="card mb-5 mt-5 shadow">
        <div className="row g-0">
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <p style={textAlign} className="card-text">
                <span className="text-success fs-5">TCR-System</span> is a sum
                total of Safety and Security Solution for urban areas hit with
                congestion and growing traffic turmoil. We come forward with
                smart solutions that all cities need as a part of developing
                India. For more than two decades we have served cities with
                Intelligent Traffic Solutions, Smart City Solutions, Smart
                Highway solutions and Urban Traffic Management solutions. With
                predictive technology and algorithms, future cities will see
                smooth urban mobility, increased productivity and decreased
                pollution. IoT is being implemented for better automation and we
                implement it for better results. The gap between transportation
                and security on highways is being filled with innovations.
                Emergency call box, automated fare collection system, waste
                collection solutions, LED display boards, security products,
                traffic light control, are some of the products we provide.
                Cities like Pune, Kakinada and Nagpur have initiated automation
                with us and with the success we gripped there, we aim to spread
                all over the country with our smart solutions. The team
                constantly keeps an eye on the latest technology and how it can
                be used in India.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={aboutus4} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
      <div className="mt-5">&nbsp;</div>
      <div className="row m-1 mt-5 align-items-center justify-content-center">
        <div className="col-sm-12 col-md-3">
          <div className="card shadow-lg">
            <img src={aboutus7_1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Smart Technology</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-1 d-flex justify-content-center">
          <h1 className="text-danger">+</h1>
        </div>
        <div className="col-sm-12 col-md-3">
          <div className="card shadow-lg">
            <img src={aboutus1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Human Safety</h5>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-1 d-flex justify-content-center">
          <h1 className="text-danger">+</h1>
        </div>
        <div className="col-sm-12 col-md-3">
          <div className="card shadow-lg">
            <img src={aboutus5} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">Human Comfort</h5>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-5">
        <div className="col-sm-12 col-md-12 d-flex justify-content-center">
          <i
            style={fontSize}
            className="fa-sharp fa-solid fa-arrow-down text-success"
          ></i>
        </div>
      </div>
      <div className="row mt-5 justify-content-center">
        <div className="col-sm-12 col-md-3">
          <div className="card shadow-lg">
            <img src={aboutus3_1} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center">
                Intelligent Urban Solution
              </h5>
            </div>
          </div>
        </div>
      </div>
      <h2 className="ms-5 mt-5 mb-0 text-center">
        <span>
          Our <span className="text-success">Vision</span>
        </span>
      </h2>
      <div style={border} class="card mb-5 mt-5 shadow">
        <div className="row g-0">
          <div className="col-md-6 d-flex align-items-center">
            <div className="card-body">
              <p style={textAlign} className="card-text">
                At <span className="text-success">TCR-System</span> we look
                forward to solving problems surrounding Traffic, Highways, and
                Cities. The underlying target we are always trying to achieve is
                to make your lives safer, easier and convenient on and off roads
                by deploying the latest technology. With this, we want to chase
                the title of Leaders of innovative transport solutions. We also
                take care that you are offered value for money services and
                solutions. We strongly believe in automated and modern
                technology that increases productivity. We are set to tackle
                traffic-related issues with modern products and solutions that
                suit an urban infrastructure; we are furiously advocating this
                through our work. With these at our focal point, we are building
                an empire of smart solutions that will make the future of India
                brighter.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <img src={aboutus9_1} className="img-fluid" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
}
export default AboutUsBody;
