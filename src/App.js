import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Chat from './pages/Chat';
import MisInversiones from './pages/MisInversiones';
import MiPerfil from './pages/MiPerfil';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
<BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/misinversiones" element={<MisInversiones />} />
        <Route path="/invertir" element={<MiPerfil />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
