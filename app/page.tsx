import Header from "./_components/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Products from "./_components/Products";
import Services from "./_components/Services";
import Market from "./_components/Market";
import Testimonials from "./_components/Testimonials";
import Contact from "./_components/Contact";
import Map from "./_components/Map";
import Footer from "./_components/Footer";
import ScrollToTop from "./_components/ScrollToTop";
import MenuMobile from "./_components/MenuMobile";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1E3B39] text-white">
      <Header />
      <MenuMobile />
      <Hero />
      <About />
      <Products />
      <Services />
      <Market />
      <Testimonials />
      <Contact />
      <Map />
      <Footer />
      <ScrollToTop />
    </div>
  );
}
