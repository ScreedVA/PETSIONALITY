import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBarSelector from "./components/NavBarSelector";
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
import { NavbarProvider } from "./services/ContextService";
import JobOffer from "./pages/JobOffer";
import AboutUs from "./pages/AboutUs";
<<<<<<< HEAD
import Matchmaking from "./pages/Matchmaking";
=======
import SingleTrainer from "./pages/SingleTrainer";
>>>>>>> 4984457e411cdb135dda2024541630e7b4489224

function App() {
  return (
    <NavbarProvider>
      <Router>
        <NavBarSelector />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/pet-owners" exact element={<PetOwners />} />
          <Route path="/pet-sitters" exact element={<PetSitters />} />
          <Route path="/pet-trainers" exact element={<PetTrainers />} />
          <Route path="/pet-shops" exact element={<PetShops />} />
          <Route path="/job-offer" exact element={<JobOffer />} />
          <Route path="/about-us" exact element={<AboutUs />} />
          <Route path="/single-trainer" exact element={<SingleTrainer />} />
          <Route path="/role-selection" exact element={<RoleSelection />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/Matchmaking" exact element={<Matchmaking />} />
          <Route
            path="/user-dashboard/owner"
            exact
            element={<UserDashboardOwner />}
          />
          <Route
            path="/user-dashboard/sitter"
            exact
            element={<UserDashboardSitter />}
          />
          <Route
            path="/user-dashboard/trainer"
            exact
            element={<UserDashboardTrainer />}
          />

          {/* Auth */}
          <Route path="/register/sso" exact element={<RegisterSSO />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" exact element={<Login />} />
        </Routes>
      </Router>
    </NavbarProvider>
  );
}

export default App;
