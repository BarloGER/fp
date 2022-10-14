import { Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Events from "./components/Events";
import EventForm from "./components/EventForm";
import Dashboard from "./components/Dashboard";
import "./styles/global.css";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventform" element={<EventForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>

      <Footer />
    </>
  );
}
