import { useState } from "react";

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

  let addRegistrationRecord = async () => {
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
  };
  return (
    <>
      <div className="row p-2 m-2 justify-content-end rounded-3 align-items-center shadow bg-light">
        <div className="container">
          <h3 className="text-center mt-3">
            <span className="text-light bg-success rounded-3 shadow p-2">
              Registration
            </span>
          </h3>

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
                />
                <div className="invalid-feedback ms-2">Enter Full Name</div>
              </div>

              <div className="col-sm-12 col-md-4">
                <input
                  id="phoneNumber"
                  className="form-control my-1 shadow-sm"
                  type="text"
                  placeholder="Enter phone number . . ."
                  onChange={handlerChangePhoneNumber}
                  value={registration.phoneNumber}
                />
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
                />
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
            
            <div className="row justify-content-center align-items-center">

              <div className="col-sm-12 col-md-4">
                <input
                  id="formFile"
                  className="form-control my-1 shadow-sm"
                  type="file"
                  placeholder="upload picture . . ."
                />
              </div>

              <div className="invalid-feedback ms-2">Upload Image</div>
              <div className="col-sm-12 col-md-4">
                <input
                  id="location"
                  className="form-control my-1 shadow-sm"
                  type="text"
                  placeholder="Location"
                  onChange={handlerChangeLocation}
                  value={registration.location}
                />
                <div className="invalid-feedback ms-2">Enter Location</div>
                
              </div>
              <div className="col-sm-12 col-md-4">
                <input
                  id="issue"
                  className="form-control my-1 shadow-sm"
                  type="text"
                  placeholder="Enter Issue"
                  onChange={handlerChangeIssue}
                  value={registration.issue}
                />
                <div className="invalid-feedback ms-2">Enter Issue</div>
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
        </div>
      </div>
    </>
  );
}
export default Registration;
