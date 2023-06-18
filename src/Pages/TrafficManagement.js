import traffic1 from "../images/traffic1.jpg";
import traffic2_1 from "../images/traffic2.1.jpg";
import traffic3_1 from "../images/traffic3.1.jpg";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
function TrafficManagement() {
  return (
    <>
     <NavigationBar/>
      <div className="m-3">
        <div className="card shadow" style={{maxWidth: "900px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={traffic1}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">
                  Reducing Congestion Without Widening Roads
                </h5>
                <p className="card-text">
                  In spite of constrained budgets for infrastructure upgrades,
                  Smart Cities around the world are using smart traffic
                  management technologies to improve the overall performance of
                  their traffic networks, with high performance, secure,
                  redundant and reliable communications solutions that can help
                  streets and highways carry more traffic in greater safety.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-center" style={{maxWidth: "1500px"}}>
        <div className="card shadow" style={{maxWidth: "900px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={traffic2_1}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">
                  Preparing for 5G, Connected Vehicles and More
                </h5>
                <p className="card-text">
                  Connected vehicle technology is one example of an innovation
                  that will have a huge impact on smart city technology
                  planning. Under trials at test sites, connected vehicle
                  technology will enable vehicle-to-intersection communications
                  and automated braking. As networks become faster, and latency
                  lowers, the ability to make instantaneous, automated decisions
                  for driver and pedestrian safety will increase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-end" style={{maxWidth: "1500px"}}>
        <div className="card shadow" style={{maxWidth: "900px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={traffic3_1}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">
                  Improving Commuter Traffic and Emergency Preparedness
                </h5>
                <p className="card-text">
                  aily traffic congestion may be one of your city's biggest
                  headaches. Ensuring emergency vehicles can rapidly and
                  effectively reach their destinations is a critical metric of
                  success for any traffic management system as well. In addition
                  to handling these urban challenges, city managers also know
                  that disaster preparedness is critical in the event of
                  city-wide events.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}
export default TrafficManagement;
