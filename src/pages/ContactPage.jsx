import React from "react";
import Navbar from "../components/header/Navbar";
import ContactFooter from "../components/shared/ContactFooter";
import Footer from "../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocation } from "@fortawesome/free-solid-svg-icons";

const ContactPage = () => {
  return (
    <>
      <Navbar showOnScroll={false} />
      <div className="contact bg-blue-400 flex justify-center h-[500px] pt-[100px] relative">
        <FontAwesomeIcon
          icon={faLocation}
          className="text-green-300 text-3xl absolute top-[180px] left-[200px]"
        />
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d596.1035862103175!2d110.04121369612147!3d-7.0775948536465725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1735917846391!5m2!1sid!2sid"
          style={{
            width: "80%",
            height: "450",
            border: "none",
            marginBottom: "30px",
          }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default ContactPage;
