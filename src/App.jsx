import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './pages/Hero';
import Tentang from './pages/Tentang';
import Struktur from './pages/Struktur';
import Presiden from './pages/Presiden';
import WakilPresiden from './pages/Wapres';
import KabarFmik from './pages/KabarFmik';
import KabarProker from './pages/KabarProker';
import Event from './pages/Event';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/tentang" element={<Tentang />} />
        <Route path="/struktur" element={<Struktur />} />
        <Route path="/presiden" element={<Presiden />} />
        <Route path="/wapres" element={<WakilPresiden />} />
        <Route path="/kabar-fmikom" element={<KabarFmik />} />
        <Route path="/kabar-proker" element={<KabarProker />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
