import React , { useEffect } from "react";
import LandingPage from "./Components/LandingPage/LandingPage"
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom"
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy"
import TermsOfService from "./Components/TOS/TOS"
import HowTo from "./Components/HowTo/HowTo"

function RedirectToExternal() {
  useEffect(() => {
    window.location.href = "https://workspace.google.com/marketplace/app/freesheetsai/351439192813"; // Replace with your desired URL
  }, []);

  return null; // This component doesn't render anything
}

function App() {

  return (
      <div className="h-screen w-screen">
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/privacy-policy/" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions/" element={<TermsOfService />} />
            <Route path="/how-to/" element={<HowTo />} />
            <Route path="/app/" element={<RedirectToExternal />} />
          </Routes>
        </Router>
      </div>
  )
}

export default App
