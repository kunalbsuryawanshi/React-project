import logo from "./images/TCR.png";
import { Container, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

function NavigationBar() {
  let imgWidth = { width: "120px" };
  let navigate = useNavigate();

  const logOutAction = () => {
    localStorage.removeItem("loginStatus");
    navigate("/Login", { replace: true });
  };

  // Assistance of LocalStorage
    let loginStatus = localStorage.getItem("loginStatus");
    if (!loginStatus) {
      return <></>;
    }  
  return (
    <header className="sticky-top mt-0 shadow">
      <Navbar
        bg="info-subtle ps-2 pe-2"
        data-bs-theme="info-subtle"
        expand="lg"
      >
        <Navbar.Brand as={Link} to={"/HomeBody"}>
          <img src={logo} style={imgWidth} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            <Nav.Link as={Link} to={"/HomeBody"}>
              Home
            </Nav.Link>

            <Nav.Link as={Link} to={"/ContactUsBody"}>
              Contact Us
            </Nav.Link>
            <Nav.Link as={Link} to={"/AboutUsBody"}>
              About Us
            </Nav.Link>
            <Nav.Link as={Link} to={"/Complaint"}>
              Complaint
            </Nav.Link>
            <Nav.Link as={Link} to={"/Admin"}>
              Status
            </Nav.Link>
            <Nav.Link>
              <input
                className="btn btn-danger rounded-pill"
                type="button"
                value="Log Out"
                onClick={logOutAction}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
}

export default NavigationBar;

/**
 <Navbar bg="dark" data-bs-theme="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">My Project</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to={"/HomeBody"}>
                Home
              </Nav.Link>

              <Nav.Link as={Link} to={"/ContactUsBody"}>
                Todo
              </Nav.Link>
              <Nav.Link as={Link} to={"/AboutUsBody"}>
                Todo List
              </Nav.Link>
              <Nav.Link as={Link} to={"/Complaint"}>
                Registration
              </Nav.Link>
              <Nav.Link as={Link} to={"/Admin"}>
                User List
              </Nav.Link>

              <Nav.Link as={Link} to={"/validation-demo"}>
                ValidationDemo
              </Nav.Link>
              <Nav.Link onClick={logOutAction}>Log Out</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
 */

/**
 <nav className="navbar navbar-expand-lg bg-info-subtle shadow">
        <div className="container-fluid">
          <Link className="navbar-brand ps-2" to={"/HomeBody"}>
            <h3>
              <img style={imgWidth} src={logo} alt="" />
            </h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/HomeBody"}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/ContactUsBody"}>
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/AboutUsBody"}>
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/Complaint"}>
                  Complaint
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to={"/Admin"}>
                  Admin
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <Link to={"/Login"}>
                <input class="btn btn-success" type="button" value="LogIn" />
              </Link>
            </form>
          </div>
        </div>
      </nav>
 */
