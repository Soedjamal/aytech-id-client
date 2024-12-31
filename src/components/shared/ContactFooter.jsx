import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ContactFooter = () => {
  return (
    <>
      <div className="contact-footer w-full bg-blue-900 pt-[80px] pb-[40px] px-[30px]">
        <div className="contact-footer-content w-full flex flex-col gap-4">
          <h1 className="text-4xl text-white font-bold w-[50%]">
            Punya ide? Kami siap bantu!
          </h1>
          <div className="contact-footer-title-desc w-[75%]">
            <p className="text-lg text-white mb-[16px]">
              Perusahaan kami dapat di percaya dan siap membantu Anda dengan
              semua kebutuhan IT Anda.
            </p>
            <p className="text-lg text-white">
              Semua yang bisa Anda pikirkan, Pasti bisa <b>KAMI BUAT!</b>
            </p>
          </div>

          <div className="contact-btn-cta flex items-center w-[50%] gap-3 justify-center px-[30px] py-[10px] bg-white rounded-full">
            <FontAwesomeIcon className="text-xl" icon={faEnvelope} />
            <Link className="font-semibold">Kirim Pesan</Link>
          </div>

          <div className="contact-footer-image mt-8 w-full h-[450px] bg-slate-100">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactFooter;
