import slider2 from "../images/slider2.jpg";
import slider1 from "../images/slider1.jpg";
import slider3 from "../images/slider3.jpg";
import slider4 from "../images/slider4.jpg";
import slider6 from "../images/slider6.jpg";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";
function AwarenessBody() {
  return (
    <>
     <NavigationBar/>
      <div className="m-3">
        <div className="card shadow" style={{maxWidth: "900px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={slider2}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">Don't drink & drive</h5>
                <p className="card-text">
                  As per Section 185 of the Motor Vehicle Act 1988, it is
                  illegal to drive when you are under the influence of alcohol
                  or drugs. More than an amount of 30mg alcohol in a sample of
                  100 ml blood if detected, or if the presence of drugs are
                  detected in the blood sample test of the concerned driver,
                  then it is considered as a punishable offence by Indian law
                  and deserves a penalty.
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
                src={slider1}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">Avoid blind spots</h5>
                <p className="card-text">
                  Below are some steps to prevent blind spots and the accidents
                  that might occur due to this phenomenon- Ensure your mirrors
                  are adjusted properly and give you the best possible field of
                  view when you start driving. Once you have set your mirrors,
                  try to figure out the spots that the mirrors aren’t covering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-end" style={{maxWidth:" 1500px"}}>
        <div className="card shadow" style={{maxWidth:" 900px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={slider3}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">Signal before making a turn</h5>
                <p className="card-text">
                  Most state laws require that the driver uses blinkers or hand
                  signals at least 100 feet before turning or changing lanes.
                  However, keep in mind that some states, like Indiana, require
                  that you signal at least 200 feet before making a turn. Always
                  check with your state’s guidelines and laws before going out
                  on the road.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3 d-flex justify-content-center" style={{maxWidth:" 1500px"}}>
        <div className="card shadow" style={{maxWidth:" 900px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={slider4}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">Put on hazards lights before . . .</h5>
                <p className="card-text">
                  Put your hazard lights on this will let other drivers and
                  road-users that you have a potential issue and will be slowing
                  down. Gradually slow down and look for a level, straight
                  stretch of road where you can pull over.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="m-3">
        <div className="card shadow" style={{maxWidth:" 900px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={slider6}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-8 bg-info-subtle">
              <div className="card-body">
                <h5 className="card-title">As you come up the On-Ramp . . .</h5>
                <p className="card-text">
                  Use the right-turn signal to move onto the right lane and
                  left-turn signal to move onto the left lane. Turn on your
                  car’s signals not less than five seconds before changing
                  lanes. Check the mirrors carefully and consider if there is an
                  opening for you to move, then move. Only turn off the signal
                  when you completely change into another lane.
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

export default AwarenessBody;
