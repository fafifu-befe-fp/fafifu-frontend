import Info from './Pages/Profile/Info';
import './App.css'; 

import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home';
import List from './Pages/List/List';
import DaftarJual from './components/DaftarJual'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register'
import InfoProfile from './Pages/Profile/Info'
import HalamanProduk from './Pages/Produk/HalamanProduk';


function App() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<DaftarJual/>} />
        <Route path="/list" element={<List />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/info" element={<InfoProfile />} />
        <Route path="/testhalproduk" element={<HalamanProduk />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
