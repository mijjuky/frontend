// import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/layout/Header"
import Nav from "./components/layout/Nav"
import Footer from "./components/layout/Footer"
import WorldPages from "./pages/World";
import NovedadesPages from "./pages/NovedadesPage"
import UnetePages from "./pages/Unete"
import GuardianasPages from "./pages/guardianas"
import EspiritusPages from "./pages/espiritus"

function App() {
  return (
    <Router>
      <Header/>
      <Nav/>
      <Routes>
        <Route path="/" exact element={<WorldPages />} />
        <Route path="/novedades" exact element={<NovedadesPages />} />
        <Route path="/unete" exact element={<UnetePages />} />
        <Route path="/guardianas" exact element={<GuardianasPages />} />
        <Route path="/espiritus" exact element={<EspiritusPages />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
