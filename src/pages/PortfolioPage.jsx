import { useState } from "react";
import Footer from "../components/footer/Footer";
import Navbar from "../components/header/Navbar";
import { PortfolioCard } from "../components/home/Portfolio";
import PortfolioNavigation from "../components/portfolio/PortfolioNavigation";
import Breadcrumb from "../components/shared/Breadcrumb";
import ContactFooter from "../components/shared/ContactFooter";
import { projectItem } from "../utils/dummyItem";
import "./styles/pages.css";

const PortfolioPage = () => {
  const [isCategory, setIsCategory] = useState("View All");

  const selectedItem =
    isCategory === "View All"
      ? projectItem
      : projectItem.filter((item) => item.category === isCategory);

  // const desktopItem = projectItem.slice()

  return (
    <>
      <Navbar showOnScroll={false} />
      <div className="portfolio min-h-screen w-full">
        <div className="portfolio-header pt-[100px] px-[35px] h-[350px] bg-blue-600 w-full">
          <div className="breadcrumb-container">
            <Breadcrumb currentPath="Portfolio" />
          </div>

          <div className="portfolio-title flex w-full justify-center mt-8 flex-col items-center gap-3">
            <h2 className=" text-3xl text-white font-semibold">Portfolio</h2>
            <h4 className="subtitle text-lg text-gray-300 text-center">
              Tingkatkan Bisnis Anda dengan Berbagai Solusi Teknologi yang Kami
              Tawarkan
            </h4>
          </div>
        </div>

        <PortfolioNavigation
          handleCategory={setIsCategory}
          selectedCategory={isCategory}
        />
        <div className="portfolio-card-group flex justify-center gap-10">
          <div className="portfolio-page-card flex flex-wrap w-[70%] mt-10 gap-10 justify-start items-start">
            {selectedItem.map((item, i) => (
              <div className="portfolio-item-group" key={i}>
                <PortfolioCard getItem={item} key={i} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default PortfolioPage;
