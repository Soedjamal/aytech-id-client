import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WhatsAppIcon = () => {
  return (
    <>
      <div className="icon-container fixed bottom-[80px] right-5 drop-shadow-lg">
        <div className="wa-logo w-[60px] h-[60px] rounded-full bg-green-500 flex justify-center items-center">
          <FontAwesomeIcon icon={faWhatsapp} className="text-white text-3xl" />
        </div>
      </div>
    </>
  );
};

export default WhatsAppIcon;
