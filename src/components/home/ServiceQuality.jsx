const ServiceQuality = () => {
  return (
    <>
      <div className="service-quality-container mb-[100px]">
        <div className="service-quality-title bg-gray-200 flex flex-col items-center w-full pt-[30px] pb-[60px] px-[30px] ">
          <h2 className="text-2xl tracking-[2px] text-secondBlue font-semibold text-center ">
            MENGAPA MEMILIH KAMI
          </h2>
          <p className="text-center mt-[40px] text-gray-700 font-semibold text-2xl tracking-[0.5px] px-[6px]">
            Pendekatan Modern & Hasil Berkelanjutan
          </p>
        </div>

        <div className="service-quality-group">
          <div className="service-quality-description pt-[60px] px-[30px]">
            <div className="title-description flex">
              <h4 className="text-lg text-secondBlue font-semibold">sejak</h4>
              <h1 className="text-6xl text-secondBlue">20??</h1>
            </div>
            <div className="description">
              <h4 className="text-xl font-semibold py-[20px]">
                Keahlian Lebih dari sekian dekade
              </h4>
              <p className="text-lg text-gray-600">
                Kami memiliki lebih dari -- tahun pengalaman yang mendalam di
                industri teknologi, memberikan solusi berkualitas tinggi dan
                inovatif kepada klien kami.
              </p>
            </div>
          </div>

          <div className="service-quality-description pt-[60px] px-[30px]">
            <div className="title-description flex">
              <h1 className="text-6xl text-secondBlue">100</h1>
              <h4 className="text-3xl text-secondBlue font-bold">%</h4>
            </div>
            <div className="description">
              <h4 className="text-xl font-semibold py-[20px]">
                Tingkat Penyelesaian
              </h4>
              <p className="text-lg text-gray-600 ">
                Kami memastikan tingkat penyelesaian proyek mencapai 100%,
                menjamin setiap aspek pekerjaan selesai sesuai dengan standar
                kualitas yang tinggi dan sesuai dengan kebutuhan Anda.
              </p>
            </div>
          </div>

          <div className="service-quality-description pt-[60px] px-[30px]">
            <div className="title-description flex">
              <h1 className="text-6xl text-secondBlue">?</h1>
              <h4 className="text-xl text-secondBlue font-semibold">+</h4>
            </div>
            <div className="description">
              <h4 className="text-xl font-semibold py-[20px]">Mitra Kerja</h4>
              <p className="text-lg text-gray-600 ">
                Setiap mitra kerja kami adalah bagian penting dari perjalanan
                kami, dan kami berkomitmen untuk mendukung mereka dengan solusi
                teknologi yang efektif dan inovatif.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceQuality;
