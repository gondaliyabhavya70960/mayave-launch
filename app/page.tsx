import Nav from "@/components/Nav";
import CinematicIntro from "@/components/CinematicIntro";
import Hero from "@/components/Hero";
import Belief from "@/components/Belief";
import Atmosphere from "@/components/Atmosphere";
import House from "@/components/House";
import WhyGrown from "@/components/WhyGrown";
import Craft from "@/components/Craft";
import TheReveal from "@/components/TheReveal";
import Products from "@/components/Products";
import ProductSlider from "@/components/ProductSlider";
import Locations from "@/components/Locations";
import JoinCircle from "@/components/JoinCircle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <CinematicIntro />
        <Hero />
        <Belief />
        <Atmosphere />
        <House />
        <WhyGrown />
        <Craft />
        <TheReveal />
        <Products />
        <ProductSlider />
        <Locations />
        <JoinCircle />
      </main>
      <Footer />
    </>
  );
}
