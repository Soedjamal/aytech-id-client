import {
  faArrowRight,
  faLaptopCode,
  faMicrochip,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const ServiceItem = ({ title, icon, description }) => {
  return (
    <>
      <div className="service-items-container w-full pb-[60px] px-[30px] pt-[100px] bg-white">
        <div className="service-item">
          <div className="service-logo bg-slate-200 flex items-center justify-center w-[100px] h-[100px] rounded-md">
            <FontAwesomeIcon icon={icon} className="text-6xl text-secondBlue" />
          </div>

          <div className="service-about my-[20px]">
            <h2 className="py-[20px] text-2xl ">{title}</h2>
            <div className="service-description">
              <p className="text-lg text-gray-600">{description}</p>
            </div>
          </div>

          <div className="service-action text-secondBlue flex items-center gap-[15px]">
            <Link>Lihat Solusi</Link>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
};

const OurService = () => {
  return (
    <>
      <div className="our-service-container w-full pt-[10px]">
        <div className="our-service-title flex flex-col items-center bg-gray-200 w-full pb-[30px] px-[30px] mt-[60px]">
          <h2 className="text-2xl tracking-[2px] text-secondBlue font-semibold text-center ">
            LAYANAN KAMI
          </h2>
          <p className="text-center mt-[40px] text-gray-700 font-semibold text-2xl tracking-[0.5px] px-[6px]">
            Bagaimana Cara Kami Menjadi Mitra Terpercaya dalam Transformasi
            Digital
          </p>
        </div>

        <div className="service-item-group">
          <ServiceItem
            title="Web Development"
            icon={faLaptopCode}
            description="Kami menyediakan jasa pembuatan aplikasi berbasis web mulai dari
                UI/UX design, development, deployment ke server hingga training
                penggunaan aplikasi ke user. Berbagai aplikasi web yang telah
                kami kerjakan berupa sistem ERP, sistem manufactoring, sistem
                stock opname, web profil perusahaan, hingga dashboard berbasis
                web, dll."
          />
          <ServiceItem
            title="Mobile Application Development"
            icon={faMobileAlt}
            description="Kami menyediakan jasa pembuatan aplikasi berbasis web mulai dari
                UI/UX design, development, deployment ke server hingga training
                penggunaan aplikasi ke user. Berbagai aplikasi web yang telah
                kami kerjakan berupa sistem ERP, sistem manufactoring, sistem
                stock opname, web profil perusahaan, hingga dashboard berbasis
                web, dll."
          />
          <ServiceItem
            title="IOT Internet Of Things"
            icon={faMicrochip}
            description="Kami menyediakan jasa pembuatan perangkat IoT berbasis Arduino,
          ESP32, dan platform sejenis, mencakup desain hardware, pemrograman, hingga
          integrasi dengan aplikasi mobile atau web. Proyek yang telah kami tangani
          meliputi smart home, monitoring suhu, sistem irigasi otomatis, hingga pengontrolan
          perangkat berbasis jaringan."
          />
        </div>
      </div>
    </>
  );
};

export default OurService;
