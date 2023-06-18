import HomeBody from "./Pages/HomeBody";
import ContactUsBody from "./Pages/ContactUsBody";
import AboutUsBody from "./Pages/AboutUsBody";
import AwarenessBody from "./Pages/AwarenessBody";
import Complaint from "./Pages/Complaint";
import Admin from "./Pages/Admin";
import Incident from "./Pages/Incident";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Voilation from "./Pages/Voilation";
import TrafficManagement from "./Pages/TrafficManagement";
import Registration from "./Pages/Registration";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RegistrationRecord from "./Pages/RegistrationRecord";
import UserRecord from "./Pages/UserRecord";

function Home() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/** 1 Route means 1 Page */}
          <Route path="/" element={<Login />} />
          <Route path="/Login" element={<Login />} />

          {/** Private Needs Protection */}
          <Route
            path="/HomeBody"
            element={
              <ProtectedRoute>
                <HomeBody />
              </ProtectedRoute>
            }
          />
          <Route
            path="/ContactUsBody"
            element={
              <ProtectedRoute>
                <ContactUsBody />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AboutUsBody"
            element={
              <ProtectedRoute>
                <AboutUsBody />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Complaint"
            element={
              <ProtectedRoute>
                <Complaint />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route
            path="/AwarenessBody"
            element={
              <ProtectedRoute>
                <AwarenessBody />
              </ProtectedRoute>
            }
          />
          <Route
            path="/TrafficManagement"
            element={
              <ProtectedRoute>
                <TrafficManagement />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Voilation"
            element={
              <ProtectedRoute>
                <Voilation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Incident"
            element={
              <ProtectedRoute>
                <Incident />
              </ProtectedRoute>
            }
          />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/Registration"
            element={
              <ProtectedRoute>
                <Registration />
              </ProtectedRoute>
            }
          />
          <Route
            path="/RegistrationRecord"
            element={
              <ProtectedRoute>
                <RegistrationRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/UserRecord"
            element={
              <ProtectedRoute>
                <UserRecord />
              </ProtectedRoute>
            }
          />
          <Route
            path="/Admin"
            element={
              <ProtectedRoute>
                <Admin />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

function ProtectedRoute({ children }) {
  let loginStatus = localStorage.getItem("loginStatus");
  if (!loginStatus) {
    return <Navigate to={"/login"} replace={true} />;
  }

  return children;
}

export default Home;
