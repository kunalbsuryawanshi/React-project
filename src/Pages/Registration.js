import { useRef, useState } from "react";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer";

function Registration() {
  let [registration, setRegistration] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    vehicalNumber: "",
    location: "",
    issue: "",
    describedIssue: "",
  });
  let [sucessBox, setSuccessBox] = useState(false);
  let handlerChangeName = (e) => {
    let newUser = { ...registration, name: e.target.value };
    setRegistration(newUser);
  };

  let handlerChangePhoneNumber = (e) => {
    let newUser = { ...registration, phoneNumber: e.target.value };
    setRegistration(newUser);
  };

  let handlerChangeEmail = (e) => {
    let newUser = { ...registration, email: e.target.value };
    setRegistration(newUser);
  };

  let handlerChangeVehicalNumber = (e) => {
    let newUser = { ...registration, vehicalNumber: e.target.value };
    setRegistration(newUser);
  };

  let handlerChangeLocation = (e) => {
    let newUser = { ...registration, location: e.target.value };
    setRegistration(newUser);
  };

  let handlerChangeIssue = (e) => {
    let newUser = { ...registration, issue: e.target.value };
    setRegistration(newUser);
  };

  let handlerChangeDescribedIssue = (e) => {
    let newUser = { ...registration, describedIssue: e.target.value };
    setRegistration(newUser);
  };

  let formRef = useRef();

  let addRegistrationRecord = async () => {
    formRef.current.classList.add("was-validated");

    let formStatus = formRef.current.checkValidity();
    if (!formStatus) {
      return;
    }
    let url = `http://localhost:4000/userRegistrationInfo?name=${registration.name}&phoneNumber=${registration.phoneNumber}&email=${registration.email}&vehicalNumber=${registration.vehicalNumber}&location=${registration.location}&issue=${registration.issue}&describedIssue=${registration.describedIssue}`;

    await fetch(url);

    let newUser = {
      name: "",
      phoneNumber: "",
      email: "",
      vehicalNumber: "",
      location: "",
      issue: "",
      describedIssue: "",
    };
    setRegistration(newUser);

    setSuccessBox(true);
    setTimeout(() => {
      setSuccessBox(false);
    }, 5000);
    alert("Complaint Registered");
    formRef.current.classList.remove("was-validated");
  };
  return (
    <>
      <NavigationBar />
      <div className="row p-2 m-2 justify-content-end rounded-3 align-items-center shadow bg-light">
        <div className="container">
          <h3 className="text-center mt-3">
            <span className="text-light bg-success rounded-3 shadow p-2">
              Registration
            </span>
          </h3>
          <form ref={formRef} className="needs-validation " novalidate>
            <div className="row justify-content-center bg-light vh-100">
              <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-4">
                  <input
                    id="name"
                    className="form-control my-1 shadow-sm"
                    type="text"
                    placeholder="Enter name . . ."
                    onChange={handlerChangeName}
                    value={registration.name}
                    minLength={4}
                    required
                  />
                  <div className="invalid-feedback ms-2">*Enter Name</div>
                </div>

                <div className="col-sm-12 col-md-4">
                  <input
                    id="phoneNumber"
                    className="form-control my-1 shadow-sm"
                    type="text"
                    placeholder="Enter phone number . . ."
                    onChange={handlerChangePhoneNumber}
                    value={registration.phoneNumber}
                    maxLength={10}
                    pattern="^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$"
                    required
                  />
                  <div className="invalid-feedback ms-2">
                    *Enter valid Phone Number
                  </div>
                </div>

                <div className="col-sm-12 col-md-4">
                  <input
                    className="form-control"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email . . ."
                    onChange={handlerChangeEmail}
                    value={registration.email}
                    pattern="^([\w]*[\w\.]*(?!\.)@gmail.com)"
                    required
                  />
                  <div className="invalid-feedback ms-2">
                    *Enter Valid Email
                  </div>
                </div>
              </div>

              <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-4">
                  <input
                    id="vehicalNo"
                    className="form-control my-1 shadow-sm"
                    type="text"
                    placeholder="Enter vehical/DL number . . ."
                    onChange={handlerChangeVehicalNumber}
                    value={registration.vehicalNumber}
                  />
                </div>

                <div className="col-sm-12 col-md-4">
                  <input
                    id="city"
                    className="form-control my-1 shadow-sm"
                    type="text"
                    value="Mumbai"
                    disabled
                    readonly
                  />
                </div>

                <div className="col-sm-12 col-md-4">
                  <input
                    id="state"
                    type="text"
                    value="Maharashtra"
                    className="form-select text-secondary shadow-sm my-1 shadow-sm"
                    disabled
                    readonly
                  />
                </div>
              </div>

              <div className="row justify-content-start align-items-center">
                <div className="col-sm-12 col-md-4">
                  <input
                    id="location"
                    className="form-control my-1 shadow-sm"
                    type="text"
                    placeholder="Location"
                    onChange={handlerChangeLocation}
                    value={registration.location}
                    required
                  />
                  <div className="invalid-feedback ms-2">*Enter Location</div>
                </div>
                <div className="col-sm-12 col-md-4">
                  <input
                    id="issue"
                    className="form-control my-1 shadow-sm"
                    type="text"
                    placeholder="Enter Issue"
                    onChange={handlerChangeIssue}
                    value={registration.issue}
                    required
                  />
                  <div className="invalid-feedback ms-2">*Enter Issue</div>
                </div>
              </div>
              <div className="row justify-content-center align-items-center">
                <div className="col-sm-12 col-md-12">
                  <textarea
                    className="form-control shadow-sm"
                    name=""
                    id=""
                    rows="5"
                    placeholder="Describe Your Issue . . "
                    onChange={handlerChangeDescribedIssue}
                    value={registration.describedIssue}
                  ></textarea>
                </div>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <input
                    className="btn btn-primary mx-4 shadow-lg"
                    style={{ width: "150px" }}
                    type="submit"
                    value="Submit"
                    onClick={addRegistrationRecord}
                  />
                </div>
              </div>
            </div>
          </form>
          {sucessBox && (
            <div className=" text-success">Complaint Registered</div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
export default Registration;
