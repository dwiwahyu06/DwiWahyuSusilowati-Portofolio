import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Certificate from "./components/Certificate";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Tech />
              <Project />
              <Certificate />
              <Contact />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
