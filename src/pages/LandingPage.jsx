import { Navbar } from '../components/Navbar/Navbar';
import Hero from './Hero';
import Tentang from '../components/Tentang/Tentang';
import Event from '../components/Event/Event';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar />
      <Hero />
      <Tentang />
      <Event />
    </div>
  );
};

export default LandingPage;
