import { faBuilding } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useNavigate } from "react-router-dom";
import { projectItem } from "../../utils/dummyItem";
import { useProjectContext } from "../../context/ProjectItemContxt";

export const PortfolioCard = ({ getItem }) => {
  const navigate = useNavigate();
  const { setIsId, setItem } = useProjectContext();
  const { id, title, description, category, image } = getItem;

  const handleSelect = () => {
    navigate("/portfolio/detail-project");
    setIsId(id);
    setItem(getItem);
  };

  return (
    <>
      <div className="portfolio-card-container snap-center flex flex-col items-center ">
        <div className="portfolio-image w-[360px] h-[360px] bg-slate-200 rounded-2xl">
          <img
            src={image}
            className="w-full h-full rounded-2xl object-cover"
            alt=""
          />
        </div>

        <div className="portfolio-info w-full my-4">
          <h3 className="title text-xl font-semibold">{title}</h3>
          <p className="hidden">{category}</p>
          <div className="company flex items-center gap-3 text-gray-500 my-3">
            <FontAwesomeIcon icon={faBuilding} />
            <p>Aytech</p>
          </div>
          <div className="portfolio-desc">
            <h3 className="text-gray-500">{description}</h3>{" "}
          </div>

          <div
            onClick={handleSelect}
            className="btn-cta flex items-center gap-3 text-blue-600 mt-4"
          >
            <button>Lihat lebih detail</button>
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
        <div className="service-quality-title bg-gray-200  flex flex-col items-center w-full pt-[30px] pb-[60px] px-[20px] ">
          <h2 className="text-2xl tracking-[2px] text-blue-700 font-semibold text-center ">
            PORTFOLIO
          </h2>
          <p className="text-center mt-[40px] text-gray-700 font-semibold text-2xl tracking-[0.5px] px-[6px]">
            Temukan solusi terbaik bersama mitra terpercaya dalam transformasi
            digital untuk bisnis Anda.
          </p>
        </div>

        <div className="portfolio-card-wrapper scroll-smooth mx-[30px] overflow-x-auto snap-x snap-mandatory flex gap-4">
          {projectItem.map((item, i) => (
            <>
              <div className="my-8">
                <PortfolioCard key={i} getItem={item} />
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Portfolio;
