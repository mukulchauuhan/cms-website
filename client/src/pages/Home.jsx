import Carousel from "../components/Carousel";
import FeatureHighlights from "../components/FeatureHighlights";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import HeroSection from "../components/HeroSection";


const Home = () => {
  return (
    <>
     <HeroSection />
     <FeatureHighlights />
     <Carousel />
     <Gallery />   
     <Footer />
    </>
  );
};

export default Home;

