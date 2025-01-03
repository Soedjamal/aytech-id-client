import React from "react";
import Navbar from "../components/header/Navbar";
import ContactFooter from "../components/shared/ContactFooter";
import Footer from "../components/footer/Footer";

const Contact = () => {
  return (
    <>
      <Navbar showOnScroll={false} />
      <div className="contact bg-blue-400 pt-[100px]">Contact Page</div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default Contact;
