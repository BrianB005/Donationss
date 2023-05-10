import { useDispatch } from "react-redux";
import "./App.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { switchPage } from "./redux/actions/activePageActions";
// import Navbar from "./components/Navbar";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import About from "./pages/About";
import ErrorPage from "./pages/ErrorPage";
import { useState } from "react";
function App() {
  const path = window.location.pathname;
  const [showLinks, setShowLinks] = useState(false);

  const dispatch = useDispatch();
  switch (path) {
    case "/":
      dispatch(switchPage("home"));
      break;
    case "/events":
      dispatch(switchPage("events"));
      break;
    case "/about":
      dispatch(switchPage("about"));
      break;
    case "/contact":
      dispatch(switchPage("contact"));
      break;
    default:
      dispatch(switchPage("home"));
      break;
  }
  return (
    <Router>
      {/* <Navbar showLinks={showLinks} setShowLinks={setShowLinks} /> */}
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage showLinks={showLinks} setShowLinks={setShowLinks} />
          }
        />
        ;
        <Route
          path="/about"
          element={<About showLinks={showLinks} setShowLinks={setShowLinks} />}
        />
        ;
        <Route
          path="/events"
          element={<Events showLinks={showLinks} setShowLinks={setShowLinks} />}
        />
        ;
        <Route
          path="/contact"
          element={
            <Contact showLinks={showLinks} setShowLinks={setShowLinks} />
          }
        />
        <Route path="/*" element={<ErrorPage />} />;
      </Routes>
    </Router>
  );
}

export default App;
