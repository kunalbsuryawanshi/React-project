import { useState } from "react";
import login1 from "../images/login1.jpg";

function Signup() {
  let [signup, setSignup] = useState({
    username: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  let handlerChangeUsername = (e) => {
    let newUser = { ...signup, username: e.target.value };
    setSignup(newUser);
  };

  let handlerChangeEmail = (e) => {
    let newUser = { ...signup, email: e.target.value };
    setSignup(newUser);
  };

  let handlerChangeCreatePassword = (e) => {
    let newUser = { ...signup, createPassword: e.target.value };
    setSignup(newUser);
  };

  let handlerChangeConfirmPassword = (e) => {
    let newUser = { ...signup, confirmPassword: e.target.value };
    setSignup(newUser);
  };

  let addUserInformationInDB = async () => {
    let url = `http://127.0.0.1:4000/userSignupInfo?username=${signup.username}&email=${signup.email}&createPassword=${signup.createPassword}&confirmPassword=${signup.confirmPassword}`;

    await fetch(url);

    let newUser = {
      username: "",
      email: "",
      createPassword: "",
      confirmPassword: "",
    };
    setSignup(newUser);
  };

  return (
    <>
      <div className="container-fluid bg-dark shadow-lg">
        <img style={{ width: "100%", position: "fixed" }} src={login1} alt="" />
      </div>
      <div
        className="row justify-content-center sticky-top"
        style={{ marginTop: "500px", height: "600px" }}
      >
        <div
          className="col-sm-6 col-md-5 col-lg-3 bg-light-subtle shadow-lg rounded-3"
          style={{ marginTop: "180px", height: "400px" }}
        >
          <h3 className="text-center text-success my-5">Sign Up</h3>
          <form onsubmit="return validation()" action="./home.html">
            <input
              id="username"
              className="form-control shadow-sm my-2"
              type="text"
              placeholder="Username . . ."
              onChange={handlerChangeUsername}
              value={signup.username}
            />

            <input
              id="email"
              className="form-control shadow-sm my-2"
              type="email"
              placeholder="Email . . ."
              onChange={handlerChangeEmail}
              value={signup.email}
            />

            <input
              id="createPassword"
              className="form-control shadow-sm my-2"
              type="createPassword"
              placeholder="Create Password . . ."
              onChange={handlerChangeCreatePassword}
              value={signup.createPassword}
            />

            <input
              id="confirmPassword"
              className="form-control shadow-sm my-2"
              type="createPassword"
              placeholder="Confirm Password . . ."
              onChange={handlerChangeConfirmPassword}
              value={signup.confirmPassword}
            />
            <div className="d-flex mt-3 justify-content-center">
              <button
                className="form-control w-50 bg-success shadow-lg rounded-pill"
                type="submit"
                onClick={addUserInformationInDB}
              >
                Sign Up
              </button>
            </div>
          </form>

          <p className="text-center text-secondary mt-2">
            Already have an account?
            <a
              style={{ textDecoration: "none", paddingLeft: "6px" }}
              href="./login.html"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
export default Signup;
