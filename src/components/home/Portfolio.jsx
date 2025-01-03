import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";

const PortfolioCard = ({ title }) => {
  const navigate = useNavigate();

  return (
    <>
      <div className="portfolio-card-container snap-center flex flex-col items-center mt-[80px] mr-[30px] mb-20">
        <div className="portfolio-image w-[360px] h-[360px] bg-slate-200 rounded-2xl">
          <img src="" alt="" />
        </div>

        <div className="portfolio-info w-full my-4">
          <h3 className="title text-xl font-semibold">{title}</h3>
          <div className="company flex items-center gap-3 text-gray-500 my-3">
            <FontAwesomeIcon icon={faBuilding} />
            <p>Aytech</p>
          </div>
          <div className="portfolio-desc">
            <h3 className="text-gray-500">
              Solusi belanja mudah dan terjangkau
            </h3>
          </div>

          <div
            onClick={() => navigate("/portfolio")}
            className="btn-cta flex items-center gap-3 text-blue-600 mt-4"
          >
            <Link>Lihat lebih detail</Link>
            <FontAwesomeIcon icon={faArrowRight} />
          </div>
        </div>
      </div>
    </>
  );
};

const Portfolio = () => {
  return (
    <>
      <div className="service-quality-container ">
        <div className="service-quality-title bg-gray-200 flex flex-col items-center w-full pt-[30px] pb-[60px] px-[20px] ">
          <h2 className="text-2xl tracking-[2px] text-blue-700 font-semibold text-center ">
            PORTFOLIO
          </h2>
          <p className="text-center mt-[40px] text-gray-700 font-semibold text-2xl tracking-[0.5px] px-[6px]">
            Temukan solusi terbaik bersama mitra terpercaya dalam transformasi
            digital untuk bisnis Anda.
          </p>
        </div>

        <div className="portfolio-card-wrapper scroll-smooth mx-[35px] overflow-x-auto snap-x snap-mandatory flex">
          <PortfolioCard title="PakTuku" />
          <PortfolioCard title="Digitalisasi Pam Desa" />
          <PortfolioCard title="Primades" />
          <PortfolioCard title="Aypos" />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
