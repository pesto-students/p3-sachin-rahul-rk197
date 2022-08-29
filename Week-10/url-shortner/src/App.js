import { useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Home';
import Footer from './Components/Footer';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />

      </Routes>
      <Footer />
    </div>
  );
}

export default App;
