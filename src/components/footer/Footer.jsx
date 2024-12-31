import { faEnvelopeOpenText, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content w-full bg-gray-800 py-20  px-[35px]">
          <h4 className="text-lg font-semibold text-gray-300">
            Mitra Terpercaya Dalam Transformasi Digital
          </h4>

          <h4 className="text-lg mt-5 text-gray-300">
            Gendring, Sukorejo, Kendal, Jawa Tengah
          </h4>

          <div className="phone-contact flex items-center gap-3 mt-8">
            <FontAwesomeIcon icon={faPhone} className="text-xl text-gray-300" />
            <p className="text-lg text-gray-300">+62 895 2001 9000</p>
          </div>

          <div className="email-contact mt-3 flex items-center gap-3">
            <FontAwesomeIcon
              icon={faEnvelopeOpenText}
              className="text-xl text-gray-300"
            />
            <p className="text-lg text-gray-300">cs@aytech.id</p>
          </div>

          <div className="footer-action flex flex-col gap-4 mt-16">
            <Link className="text-lg text-gray-300" to="/about">
              Tentang Aytech
            </Link>
            <Link className="text-lg text-gray-300" to="/portfolio">
              Portfolio
            </Link>
            <Link className="text-lg text-gray-300" to="/contact">
              Hubungi Kami
            </Link>
          </div>

          <div className="copyrights flex w-full h-32 justify-center mt-14 py-5">
            <p className="text-sm text-gray-400 text-center">
              &#169; 2024. All Rights Reserved by{" "}
              <b className="text-blue-400">
                PT. Digerati Aytech Great Solution.{" "}
              </b>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
