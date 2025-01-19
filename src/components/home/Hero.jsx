import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./home.css";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      <div
        id="hero"
        className="hero-container relative w-full pt-[150px] bg-firstBlue z-0"
      >
        <div className="hero-title text-white flex justify-center w-full flex-col items-center px-[30px] text-center">
          <h2 className="main-title text-3xl font-bold mb-[35px]">
            Mitra Terpercaya dalam Transformasi Digital
          </h2>
          <p className="main-title-desc text-lg mb-[30px]">
            Kami hadir untuk mendukung bisnis Anda melalui pengembangan web,
            aplikasi mobile, dan integrasi sistem
          </p>

          <p className="second-title-desc text-lg">
            Temukan solusi terbaik bersama mitra terpercaya dalam transformasi
            digital untuk bisnis Anda.
          </p>

          <div className="button-cta-container flex flex-col gap-[20px] mt-[30px]">
            <Link
              to="/contact"
              className="py-[15px] px-[60px] rounded-full bg-blue-400 text-lg"
            >
              Hubungi Kami
            </Link>
            <Link
              to="/portfolio"
              className="border-2 border-blue-400 py-[15px] px-[60px] rounded-full text-lg"
            >
              Lihat Portfolio
            </Link>
          </div>
        </div>

        <div className="hero-image-container relative w-full mt-[100px]  h-[350px]">
          <div
            className={`first-picture absolute bottom-0 transition-all duration-[1s] ease-out ${
              isVisible ? "" : "n-visible left-32 opacity-0"
            } w-[100px] h-[100px] bg-blue-300`}
          >
            <img src="/azam.jpg" alt="" />
          </div>

          <div
            className={`second-picture absolute top-8 transition-all duration-[0.6s] ease-out shadow-xl ${
              isVisible ? "" : "n-visible left-[150px] opacity-0"
            } w-[150px] h-[150px] bg-blue-300 z-10`}
          >
            <img src="/akmal.jpg" alt="" />
          </div>

          <div
            className={`third-picture absolute bottom-0 transition-all duration-[1.2s] ease-out ${
              isVisible ? "" : "n-visible right-[-128px] opacity-0"
            } w-[230px] h-[200px] bg-blue-400 z-0`}
          >
            <img src="/windy.jpg" alt="" />
          </div>

          <div
            className={`fourth-picture absolute top-0 transition-all duration-[0.9s] ease-out shadow-lg ${
              isVisible ? "" : "n-visible right-[-100px] opacity-0"
            }  w-[100px] h-[100px] bg-blue-300`}
          >
            <img src="/naja.jpg" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
