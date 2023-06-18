import { useRef, useState } from "react";
import login1 from "../images/login1.jpg";
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  let [signup, setSignup] = useState({
    username: "",
    email: "",
    createPassword: "",
    confirmPassword: "",
  });
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

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
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }
      let url = `http://127.0.0.1:4000/userSignupInfo?username=${signup.username}&email=${signup.email}&createPassword=${signup.createPassword}&confirmPassword=${signup.confirmPassword}`;

      let res = await fetch(url);
      if (res.status != 200) {
        let serverMsg = await res.text();
        throw new Error(serverMsg);
      }
      let newUser = {
        username: "",
        email: "",
        createPassword: "",
        confirmPassword: "",
      };
      setSignup(newUser);

      formRef.current.classList.remove("was-validated");
      alert("success");
      setIsSuccess(true);
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsSuccess(false);
        setIsError(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="container-fluid bg-dark sticky-top shadow-lg">
        <img style={{ width: "100%", height: "100%" }} src={login1} alt="" />
      </div>
      <div
        className="row vh-100 justify-content-center sticky-top"
        style={{ marginTop: "80px", height: "600px" }}
      >
        <div
          className="col-sm-6 col-md-5 col-lg-3 bg-light-subtle shadow-lg rounded-3"
          style={{ marginTop: "180px", height: "430px" }}
        >
          <h3 className="text-center text-success my-5">Sign Up</h3>
          <form ref={formRef} className="needs-validation " novalidate>
            <input
              id="username"
              className="form-control shadow-sm my-2"
              type="text"
              placeholder="Username . . ."
              onChange={handlerChangeUsername}
              value={signup.username}
              minLength={4}
              required
            />

            <input
              id="email"
              className="form-control shadow-sm my-2"
              type="email"
              placeholder="Email . . ."
              onChange={handlerChangeEmail}
              value={signup.email}
              pattern="^([\w]*[\w\.]*(?!\.)@gmail.com)"
              required
            />

            <input
              id="createPassword"
              className="form-control shadow-sm my-2"
              type="password"
              placeholder="Create Password . . ."
              onChange={handlerChangeCreatePassword}
              value={signup.createPassword}
              minLength={6}
              maxLength={12}
              required
            />

            <input
              id="confirmPassword"
              className="form-control shadow-sm my-2"
              type="password"
              placeholder="Confirm Password . . ."
              onChange={handlerChangeConfirmPassword}
              value={signup.confirmPassword}
              minLength={6}
              maxLength={12}
              required
            />
          </form>
          <div className="d-flex mt-3 justify-content-center">
            <button
              className="form-control w-50 bg-success shadow-lg rounded-pill"
              type="submit"
              onClick={addUserInformationInDB}
            >
              Sign Up
            </button>
          </div>
          {isSuccess && (
            <div className="alert alert-success">Signup Successful</div>
          )}
          {isError && <div className="alert alert-danger">Invalid Datails</div>}

          <p className="text-center text-secondary mt-2 mb-5">
            Already have an account?
            <Link
              style={{ textDecoration: "none", paddingLeft: "6px" }}
              to={"/Login"}
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Signup;
