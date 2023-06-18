import NavigationBar from "./NavigationBar";
import Footer from "./Footer";
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
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegistrationRecord from "./Pages/RegistrationRecord";
import UserRecord from "./Pages/UserRecord";

function Home() {
  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path="/HomeBody" element={<HomeBody />} />
          <Route path="/ContactUsBody" element={<ContactUsBody />} />
          <Route path="/AboutUsBody" element={<AboutUsBody />} />
          <Route path="/Complaint" element={<Complaint />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/AwarenessBody" element={<AwarenessBody />} />
          <Route path="/TrafficManagement" element={<TrafficManagement />} />
          <Route path="/Voilation" element={<Voilation />} />
          <Route path="/Incident" element={<Incident />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Registration" element={<Registration />} />
          <Route path="/RegistrationRecord" element={<RegistrationRecord />} />
          <Route path="/UserRecord" element={<UserRecord />} />
          <Route path="/Admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default Home;
