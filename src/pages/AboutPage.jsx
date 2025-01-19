import { useEffect } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import Introduction from "../components/home/Introduction";
import ServiceQuality from "../components/home/ServiceQuality";
import Breadcrumb from "../components/shared/Breadcrumb";
import ContactFooter from "../components/shared/ContactFooter";
import "./styles/pages.css";

const AboutPage = () => {
  useEffect(() => {
    window.scrollTo({ top: -10, behavior: "smooth" })
  }, [])
  return (
    <>
      <Navbar showOnScroll={false} />
      <div className="about">
        <div className="about-header pt-[100px] px-[35px] h-[350px] bg-blue-600 w-full">
          <div className="breadcrumb-container">
            <Breadcrumb currentPath="Tentang Aytech" />
          </div>

          <div className="about-title flex w-full justify-center mt-8">
            <h2 className="page-main-title text-3xl text-white font-semibold">
              Tentang Aytech
            </h2>
          </div>
        </div>
        <ServiceQuality />
        <Introduction />
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default AboutPage;
