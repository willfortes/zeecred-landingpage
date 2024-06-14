import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Step from "@/components/Step";
import Simulation from "@/components/Simulation";

export default function Home() {
  return (
    <div>
      <Menu />
      <Header />
      <Step />
      <About />
      <Simulation />
      <Faq />
      <Footer />
    </div>
  );
}
