const partnerItems = [
  {
    id: 1,
    image: "/images/partnerImages/sannotes.png",
  },
  {
    id: 2,
    image: "./images/partnerImages/png1.png",
  },
  {
    id: 3,
    image: "./images/partnerImages/png2.png",
  },
  {
    id: 4,
    image: "./images/partnerImages/png3.png",
  },
  // {
  //   id: 5,
  //   image: "./images/partnerImages",
  // },
];

const PartnerCard = ({ partnerItem }) => {
  const { image } = partnerItem;
  return (
    <>
      <div className="partner-card-container">
        <div className="partner-image w-[100px] h-[100px] rounded-2xl overflow-hidden">
          <img className="w-full h-full object-contain" src={image} alt="" />
        </div>
      </div>
    </>
  );
};

const MyPartner = () => {
  return (
    <>
      <div className="my-partner-container bg-white w-full">
        <div className="my-partner-title flex flex-col items-center w-full px-[30px] mt-[60px]">
          <h2 className="text-2xl tracking-[2px] text-secondBlue font-semibold text-center ">
            MITRA KAMI DALAM TRANSFORMASI DIGITAL
          </h2>
          <p className="text-center mt-[40px] text-gray-500 text-lg">
            Mitra berharga kami yang membuat kami menjadi{" "}
            <b className="text-gray-600">
              Mitra yang dapat di percaya dalam transformasi digital
            </b>
          </p>
        </div>

        <div className="partner-card-wrapper py-8">
        <div className="partner-card-group">
            {partnerItems.map((partner, i) => (
              <PartnerCard key={i} partnerItem={partner} />
            ))}
          </div>
          <div className="partner-card-group">
            {partnerItems.map((partner, i) => (
              <PartnerCard key={i} partnerItem={partner} />
            ))}
          </div>{" "}
          <div className="partner-card-group">
            {partnerItems.map((partner, i) => (
              <PartnerCard key={i} partnerItem={partner} />
            ))}
          </div>{" "}
          <div className="partner-card-group">
            {partnerItems.map((partner, i) => (
              <PartnerCard key={i} partnerItem={partner} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyPartner;
