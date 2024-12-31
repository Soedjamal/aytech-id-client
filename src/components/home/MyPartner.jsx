// const PartnerCard = () => {
//   return (
//     <>
//       <div className="partner-card-container flex snap-center w-[200px] h-[200px] bg-slate-200">
//         <h1>Pertamina</h1>
//       </div>
//     </>
//   );
// };
//
// const MyPartner = () => {
//   return (
//     <>
//       <div className="my-partner-container bg-white flex flex-col items-center w-full px[30px]">
//         <div className="my-partner-title flex flex-col items-center w-full px-[30px] mt-[60px]">
//           <h2 className="text-2xl tracking-[2px] text-blue-700 font-semibold text-center ">
//             MITRA KAMI DALAM TRANSFORMASI DIGITAL
//           </h2>
//           <p className="text-center mt-[40px] text-gray-500 text-lg">
//             Mitra berharga kami yang membuat kami menjadi{" "}
//             <b className="text-gray-600">
//               Mitra yang dapat di percaya dalam transformasi digital
//             </b>
//           </p>
//         </div>
//
//         <div className="carousel-container mx-[35px] overflow-x-auto snap-x snap-mandatory flex">
//           <PartnerCard />
//           <PartnerCard />
//           <PartnerCard />
//           <PartnerCard />
//         </div>
//
//         <div className="dot-container flex gap-[15px] mb-10 mt-[200px]">
//           <div className="dot w-[5px] h-[5px] rounded-full bg-gray-700"></div>
//           <div className="dot w-[5px] h-[5px] rounded-full bg-gray-700"></div>
//           <div className="dot w-[5px] h-[5px] rounded-full bg-gray-700"></div>
//           <div className="dot w-[5px] h-[5px] rounded-full bg-gray-700"></div>
//           <div className="dot w-[5px] h-[5px] rounded-full bg-gray-700"></div>
//           <div className="dot w-[5px] h-[5px] rounded-full bg-gray-700"></div>
//           <div className="dot w-[5px] h-[5px] rounded-full bg-gray-700"></div>
//         </div>
//       </div>
//     </>
//   );
// };
//
// export default MyPartner;
//
// import { faBuilding } from "@fortawesome/free-regular-svg-icons";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { Link } from "react-router-dom";

const PartnerCard = () => {
  return (
    <>
      <div className="portfolio-card-container snap-center flex flex-col items-center mt-[80px] mr-[30px] mb-20">
        <div className="portfolio-image w-[200px] h-[200px] bg-slate-200 rounded-2xl">
          <img src="" alt="" />
        </div>
      </div>
    </>
  );
};

const MyPartner = () => {
  return (
    <>
      <div className="my-partner-container bg-white">
        <div className="my-partner-title flex flex-col items-center w-full px-[30px] mt-[60px]">
          <h2 className="text-2xl tracking-[2px] text-blue-700 font-semibold text-center ">
            MITRA KAMI DALAM TRANSFORMASI DIGITAL
          </h2>
          <p className="text-center mt-[40px] text-gray-500 text-lg">
            Mitra berharga kami yang membuat kami menjadi{" "}
            <b className="text-gray-600">
              Mitra yang dapat di percaya dalam transformasi digital
            </b>
          </p>
        </div>

        <div className="portfolio-card-wrapper pl-20 gap-14 scroll-smooth mx-[35px] overflow-x-auto snap-x snap-mandatory flex">
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
          <PartnerCard />
        </div>
      </div>
    </>
  );
};

export default MyPartner;
