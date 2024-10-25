import { Navbar } from '../components/Navbar/Navbar';
import Hero from './Hero';
import Tentang from '../components/Tentang/Tentang';
import OurTeam from '../components/OurTeam/OurTeam';

const LandingPage = () => {
  return (
    <div className="w-full h-screen bg-zinc-900">
      <Navbar />
      <Hero />
      <Tentang />
      <OurTeam />
    </div>
  );
};

export default LandingPage;
