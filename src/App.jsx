import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import Hero from './pages/Hero';
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Hero />
    </BrowserRouter>
  );
}

export default App;
