import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shirts from './pages/Shirts';
import Jeans from './pages/Jeans';
import Electronics from './pages/Electronics';
import WomenWear from './pages/WomenWear';
import AdminLogin from './pages/AdminLogin';
import AdminPanel from './pages/AdminPanel';
import Header from './components/Header';
import Footer from './components/Footer'; // 👈 Import Footer

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shirts" element={<Shirts />} />
        <Route path="/jeans" element={<Jeans />} />
        <Route path="/electronics" element={<Electronics />} />
        <Route path="/womenwear" element={<WomenWear />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/adminpanel" element={<AdminPanel />} />
      </Routes>
      <Footer /> {/* 👈 Add Footer after Routes */}
    </Router>
  );
}

export default App;
