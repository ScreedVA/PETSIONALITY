import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PetSitters from "./pages/PetSitters";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/pet-sitters" exact element={<PetSitters />} />
      </Routes>
    </Router>
  );
}

export default App;
