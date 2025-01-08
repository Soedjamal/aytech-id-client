import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./style.css";

const WhatsAppIcon = () => {
  return (
    <>
      <div className="icon-container fixed bottom-[80px] right-5 drop-shadow-lg flex gap-4">
        <div className="icon-wa-msg flex items-center justify-center px-6 py-[4px] bg-green-200 rounded-full text-sm">
          <h3>Punya pertanyaan? Tanya kami</h3>
        </div>
        <div className="wa-logo w-[60px] h-[60px] rounded-full bg-green-500 flex justify-center items-center">
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
        </div>
      </div>
    </>
  );
};

export default WhatsAppIcon;
