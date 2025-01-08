import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Hero from "../components/home/Hero";
import Introduction from "../components/home/Introduction";
import MyPartner from "../components/home/MyPartner";
import OurService from "../components/home/OurService";
import Portfolio from "../components/home/Portfolio";
import ServiceQuality from "../components/home/ServiceQuality";
import ContactFooter from "../components/shared/ContactFooter";
import ToUp from "../components/shared/ToUp";
import WhatsAppIcon from "../components/shared/WhatsAppIcon";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <div className="home w-full">
        <Hero />
        <MyPartner />
        <OurService />
        <Introduction />
        <ServiceQuality />
        <Portfolio />
        <ContactFooter />
        <Footer />
      </div>
      <WhatsAppIcon />
      <ToUp />
    </>
  );
};

export default HomePage;
