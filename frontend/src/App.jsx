import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import NavBarSelector from "./pages/NavBarSelector";
import Home from "./pages/Home";
import PetOwners from "./pages/PetOwners";
import PetSitters from "./pages/PetSitters";
import PetTrainers from "./pages/PetTrainers";
import PetShops from "./pages/PetShops";
import RoleSelection from "./pages/RoleSelection";
import Contact from "./pages/Contact";
import RegisterSSO from "./pages/RegisterSSO";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserDashboardOwner from "./pages/UserDashboardOwner";
import UserDashboardSitter from "./pages/UserDashboardSitter";
import UserDashboardTrainer from "./pages/UserDashboardTrainer";
import UserDashboard from "./pages/UserDashboard";
import { NavbarProvider } from "./services/ContextService";
import JobOffer from "./pages/JobOffer";
import AboutUs from "./pages/AboutUs";

import SingleTrainer from "./pages/SingleTrainer";
import Matchmaking from "./pages/Matchmaking";
import OurConcept from "./pages/OurConcept";
import FAQs from "./pages/FAQs";
import { useEffect, useLayoutEffect } from "react";
import {
  handle401Exception,
  loginUser,
  registerUser,
} from "./services/http/Auth";
import { API_BASE_DOMAIN } from "./services/Common";
import Toaster from "./pages/Toaster";
import { getMyTrainerInfo } from "./services/http/Trainer";

const ScrollToTop = ({ children }) => {
  const location = useLocation();

  useLayoutEffect(() => {
    // Scroll to the top of the page when the route changes
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return children;
};

function App() {
  useEffect(() => {
    async function testHttp() {
      let response = await getMyTrainerInfo();
      try {
      } catch (err) {}
    }

    testHttp();
  });
  return (
    <NavbarProvider>
      <Toaster />
      <Router>
        <NavBarSelector />
        <ScrollToTop>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/pet-owners" exact element={<PetOwners />} />
            <Route path="/pet-sitters" exact element={<PetSitters />} />
            <Route path="/pet-trainers" exact element={<PetTrainers />} />
            <Route path="/pet-shops" exact element={<PetShops />} />
            <Route path="/job-offer" exact element={<JobOffer />} />
            <Route path="/about-us" exact element={<AboutUs />} />
            <Route path="/our-concept" exact element={<OurConcept />} />
            <Route path="/faq" exact element={<FAQs />} />
            <Route path="/single-trainer" exact element={<SingleTrainer />} />
            <Route path="/role-selection" exact element={<RoleSelection />} />
            <Route path="/contact" exact element={<Contact />} />
            <Route path="/Matchmaking" exact element={<Matchmaking />} />

            <Route path="/user-dashboard" exact element={<UserDashboard />} />
            {/* <Route path="/user-dashboard/owner" exact element={<UserDashboardOwner />} />
          <Route path="/user-dashboard/sitter" exact element={<UserDashboardSitter />} />
          <Route path="/user-dashboard/trainer" exact element={<UserDashboardTrainer />} /> */}

            {/* Auth */}
            <Route path="/register/sso" exact element={<RegisterSSO />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
        </ScrollToTop>
      </Router>
    </NavbarProvider>
  );
}

export default App;
