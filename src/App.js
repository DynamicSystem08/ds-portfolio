import './App.css';
import Header from "./Component/Header"
import BackgroundImage from './Screen/Home/BackgroundImgae';
import AboutComponay from './Screen/Home/AboutComponay';
import Services from './Screen/Home/Services';
import WhyChoosUs from './Screen/Home/WhyChooseUs';
import OurChaseStudy from './Screen/Home/OurCaseStudy';
import OurTeam from './Screen/Home/OurTeam';
import Testimonials from './Screen/Home/Testimonials';
import PricingPlans from './Screen/Home/PricingPlans';
import Location from './Screen/Home/Location';
import Footer from './Component/Footer';
function App() {

  return (
    <div>
      <Header />
      <BackgroundImage />
      <AboutComponay />
      <Services />
      <WhyChoosUs />
      <OurChaseStudy />
      <OurTeam />
      <Testimonials />
      <PricingPlans />
      <Location />
      <Footer />
    </div>
  );
}

export default App;
