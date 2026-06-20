import Intro from "@/components/Intro";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Belief from "@/components/Belief";
import Atmosphere from "@/components/Atmosphere";
import House from "@/components/House";
import WhyGrown from "@/components/WhyGrown";
import Craft from "@/components/Craft";
import TheReveal from "@/components/TheReveal";
import Products from "@/components/Products";
import Locations from "@/components/Locations";
import TheLine from "@/components/TheLine";
import JoinCircle from "@/components/JoinCircle";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Intro />
      <Nav />
      <main>
        <Hero />
        <Belief />
        <Atmosphere />
        <House />
        <WhyGrown />
        <Craft />
        <TheReveal />
        <Products />
        <Locations />
        <TheLine />
        <JoinCircle />
      </main>
      <Footer />
    </>
  );
}
