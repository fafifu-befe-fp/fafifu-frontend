import './App.css';

import Info from './Pages/Profile/Info';

import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './Pages/Home/Home';
// import List from './Pages/List/List';
import DaftarJual from './components/DaftarJual'

// import Info from './Pages/Profile/Info';

import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<DaftarJual/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
