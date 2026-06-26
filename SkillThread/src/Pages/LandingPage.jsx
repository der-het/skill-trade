import Navbar from "../Layout/Navbar";
import Hero from "../LPage-com/Hero";
import TrendingSkills from "../LPage-com/TrendingSkills";
import LearningCycle from "../LPage-com/LearningCycle";
import FAQ from "../LPage-com/FAQ";
import Footer from "../Layout/Footer";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero/>
      <TrendingSkills/>
      <LearningCycle/>
      <FAQ/>
      <Footer/>
    </>
  );
}

export default LandingPage;