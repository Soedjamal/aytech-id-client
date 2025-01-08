import Navbar from "../components/header/Navbar";
import ContactFooter from "../components/shared/ContactFooter";
import Footer from "../components/footer/Footer";
import Breadcrumb from "../components/shared/Breadcrumb";
import { projectItem } from "../utils/dummyItem";
import { PortfolioCard } from "../components/home/Portfolio";
import { useProjectContext } from "../context/ProjectItemContxt";
import { useEffect, useState } from "react";

const DetailProjectPage = () => {
  const { isId } = useProjectContext();

  const itemById = projectItem.filter((item) => item.id === isId);

  return (
    <>
      <Navbar showOnScroll={false} />
      <div className="pt-[100px] pb-[50px] px-[35px] bg-blue-600 w-full">
        <Breadcrumb
          pathOn={true}
          currentPath="Portfolio"
          subCurrentPath={itemById[0].title}
        />
        {itemById.map((item, i) => (
          <>
            <div
              key={i}
              className="portfolio-title flex w-full mt-12 flex-col items-start gap-3"
            >
              <h2 className=" text-2xl text-white font-semibold">
                {item.title}
              </h2>
              <h4 className="subtitle text-lg text-gray-300 text-center">
                {item.description}
              </h4>
            </div>
            <div className="mockup-container mt-[50px] flex w-full justify-center py-[100px] relative">
              <div className="mockup absolute left-12 top-6 w-[250px] h-[125px] bg-slate-400 rounded-lg skew-y-3"></div>
              <div className="mockup absolute w-[200px] h-[100px] bg-slate-300 rounded-lg skew-y-3"></div>
            </div>
          </>
        ))}
      </div>
      <ContactFooter />
      <Footer />
    </>
  );
};

export default DetailProjectPage;
