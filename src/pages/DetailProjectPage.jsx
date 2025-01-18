import Navbar from "../components/header/Navbar";
import ContactFooter from "../components/shared/ContactFooter";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/shared/Breadcrumb";
import { projectItem } from "../utils/dummyItem";
import { useProjectContext } from "../context/ProjectItemContxt";
import "./styles/pages.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe, faBrain, faPhone } from "@fortawesome/free-solid-svg-icons";

const DetailProjectPage = () => {
  const { isId } = useProjectContext();

  const itemById = projectItem.filter((item) => item.id === isId);

  return (
    <>
      <Navbar showOnScroll={false} />
      <div className="detail-portfolio-item pt-[100px] px-[35px] bg-blue-600 w-full " style={{ background: `url(${"/public/IMG-20250111-WA0006.jpg"})`, backgroundSize: "cover" }}>
        <div className="breadcrumb-container">
          <Breadcrumb
            pathOn={true}
            currentPath="Portfolio"
            subCurrentPath={itemById[0].title || ""}
          />
        </div>
        <div className="detail-portfolio-body ">
          {itemById.map((item, i) => (
            <>
              <div className="detail-portfolio-group flex items-center">
                <div
                  key={i}
                  className="portfolio-title flex w-full mt-12 flex-col items-start gap-3"
                >
                  <h2 className="main-product-title text-2xl text-white font-semibold">
                    {item.title}
                  </h2>
                  <h4 className="subtitle text-lg text-gray-300 text-center">
                    {item.description}
                  </h4>

                  <div className="portfolio-category flex items-center bg-blue-100 rounded-full gap-3 px-3 py-1">
                    <FontAwesomeIcon icon={faGlobe} />
                    <p>{item.category}</p>
                  </div>
                </div>
                <div className="mockup-container flex w-full justify-center mb-[100px] py-[100px] relative">
                  <div className="mockup absolute w-[500px] h-[300px] bg-slate-300 rounded-lg shadow-black drop-shadow-lg"></div>
                </div>
              </div>
            </>
        ))}
        </div>
        <div className="portfolio-item-decription-container min-h-screen bg-white">
          {itemById.map((item, i) => (
            <>
              <div className="main-container-of-description">
              <div className="description-group">
              <div className="description-container " key={i}>
                <h1 className="description-title">Deskripsi: </h1>
                <div className="description-content">{item.description}</div>
              </div>
              <div className="description-container " key={i}>
                <h1 className="description-title">Features: </h1>
                <div className="description-content">{item.title}</div>
              </div>
              </div>
              <div className="description-group">
              <div className="description-container " key={i}>
                <h1 className="description-title">Features: </h1>
                <div className="description-content">{item.description}</div>
              </div>
              <div className="description-container " key={i}>
                <h1 className="description-title">Features: </h1>
                <div className="description-content">{item.title}</div>
              </div>
              </div>
              <div className="description-group">
              <div className="description-container " key={i}>
                <h1 className="description-title">Features: </h1>
                <div className="description-content">{item.description}</div>
              </div>
              <div className="description-container " key={i}>
                <h1 className="description-title">Features: </h1>
                <div className="description-content">{item.title}</div>
              </div>
              </div>
              </div>
            </>
          ))}
        </div>
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default DetailProjectPage;
