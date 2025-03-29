import Hero from "../components/Hero";
import Navbar from "../components/Navbar/Navbar";
import back from '../assets/back.jpg';

export default function Home() {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${back})`, height: '100vh', width: '100%' ,position:'fixed'}}
    >
      <Navbar />
      <Hero />
    </div>
  );
}
