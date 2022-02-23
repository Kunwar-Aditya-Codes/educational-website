import { Route, Routes } from "react-router-dom";
import Engineering from "./components/Engineering";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import IT from "./components/IT";
import Mech from "./components/Mech";
import Civil from "./components/Civil";
import Electronics from "./components/Electronics";
import Phd from "./components/Phd";
import Training from "./components/Training";
import Internship from "./components/Internship";
import CompetitveExam from "./components/CompetitveExam";
import AppDevelopement from "./components/AppDevelopement";
import WebDevelopement from "./components/WebDevelopement";
import About from "./components/About";
import Events from "./components/Events";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen overflow-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/engineering" element={<Engineering />} />
        <Route path="/engineering/it" element={<IT />} />
        <Route path="/engineering/mechanical" element={<Mech />} />
        <Route path="/engineering/civil" element={<Civil />} />
        <Route path="/engineering/electronics" element={<Electronics />} />
        <Route path="/phd" element={<Phd />} />
        <Route path="/training" element={<Training />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="competitive-exam" element={<CompetitveExam />} />
        <Route path="app-dev" element={<AppDevelopement />} />
        <Route path="web-dev" element={<WebDevelopement />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
