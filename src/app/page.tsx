
import Hero from "../app/components/landing-page/Hero"
import Navbar from "./components/landing-page/Navbar";
import About from "./components/landing-page/About";
import Pricing from "./components/landing-page/Pricing";

export default function Home() {
  return (
    <div className="bg-[#1B1818]">
      <Navbar />
      <Hero />
      <About />
      <Pricing />
    </div>
  );
}
