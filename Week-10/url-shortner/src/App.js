import { useState } from 'react';
import {
  Route,
  Routes,
  useLocation,
  useNavigate
} from "react-router-dom";
import Header from './Components/Header';
import Home from './Home';
import './App.css';

function App() {

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;
