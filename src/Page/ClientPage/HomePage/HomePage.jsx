import "../../../assets/lib/owlcarousel/assets/owl.carousel.min.css";
import "../../../assets/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";

// Import custom CSS
import "../../../assets/css/style.css";

import AboutSection from "../../../Components/AboutSection";
import FeaturesSection from "./Component/FeatureSection";
import DestinationSection from "../../../Components/DestinationSection";
import ServicesSection from "../../../Components/ServicesSection";
import TourPackages from "../../../Components/TourPackages";
import RegistrationComponent from "../../../Components/RegistrationComponent";
import TravelGuides from "../../../Components/TravelGuides";
import Testimonial from "./Component/Testimonial";
import BlogSection from "./Component/BlogSection";
import Footer from "../../../Layout/DefaultLayout/Components/Footer";
function HomePage() {
  return (
    <>
      {/* <!-- Carousel End --> */}
      <AboutSection></AboutSection>
      <FeaturesSection></FeaturesSection>
      <DestinationSection></DestinationSection>
      <ServicesSection></ServicesSection>
      <TourPackages></TourPackages>
      <RegistrationComponent></RegistrationComponent>
      <TravelGuides></TravelGuides>
      <BlogSection></BlogSection>
    </>
  );
}

export default HomePage;
