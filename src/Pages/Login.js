import { useRef, useState } from "react";
import login2 from "../images/login2.jpg";
import { Link, useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();
  let formRef = useRef();

  let [login, setLogin] = useState({ username: "", email: "", password: "" });
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let handlerChangeUsername = (e) => {
    let newuser = { ...login, username: e.target.value };
    setLogin(newuser);
  };

  let handlerChangeEmail = (e) => {
    let newuser = { ...login, email: e.target.value };
    setLogin(newuser);
  };
  let handlerChangePassword = (e) => {
    let newuser = { ...login, password: e.target.value };
    setLogin(newuser);
  };
  let addUserLoginInfo = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      let url = `http://localhost:4000/userLoginInfo?username=${login.username}&email=${login.email}&password=${login.password}&confirmPassword=${login.password}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/HomeBody", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className="container-fluid bg-dark shadow-lg d-flex justify-content-center">
        <img style={{ width: "100%", position: "fixed" }} src={login2} alt="" />
      </div>
      <div
        className="row vh-100 justify-content-center sticky-top"
        style={{ marginTop: "550px", height: "600px" }}
      >
        <div
          className="col-sm-6 col-md-5 col-lg-3 bg-light-subtle shadow-lg rounded-3"
          style={{ marginTop: "180px", height: "400px" }}
        >
          <h3 className="text-center text-primary my-5">Log In</h3>
          <form ref={formRef} className="needs-validation " noValidate>
            <input
              id="username"
              className="form-control shadow-sm my-2"
              type="text"
              placeholder="Username . . ."
              onChange={handlerChangeUsername}
              value={login.username}
              required
            />

            <input
              id="email"
              className="form-control shadow-sm my-2"
              type="email"
              placeholder="Email . . ."
              onChange={handlerChangeEmail}
              value={login.email}
              pattern="^([\w]*[\w\.]*(?!\.)@gmail.com)"
              required
            />

            <input
              id="password"
              className="form-control shadow-sm my-2"
              type="password"
              placeholder="password . . ."
              onChange={handlerChangePassword}
              value={login.password}
              maxLength={12}
              required
            />
          </form>

          <div className="d-flex mt-3 justify-content-center">
            <button
              className="form-control w-50 bg-primary shadow-lg rounded-pill"
              type="btn"
              onClick={addUserLoginInfo}
            >
              Log In
            </button>
          </div>
          {isSuccess && (
            <div className="alert alert-success">Login Successful</div>
          )}
          {isError && (
            <div className="alert alert-danger">Incorrect Details</div>
          )}
          <p className="text-center text-secondary mt-2">
            Don't have an account?
            <Link
              style={{ textDecoration: "none", paddingLeft: "6px" }}
              to={"/Signup"}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
export default Login;
