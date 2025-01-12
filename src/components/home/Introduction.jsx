import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Introduction = () => {
  return (
    <>
      <div className="introduction-container">
        <div className="introduction-title bg-gray-200 flex flex-col items-center w-full py-[30px] px-[30px]">
          <h2 className="text-2xl tracking-[2px] text-blue-700 font-semibold text-center ">
            SIAPAKAH AYTECH GREAT SOLUTION
          </h2>
          <p className="text-center mt-[40px] text-gray-700 font-semibold text-2xl tracking-[0.5px] px-[6px]">
            Mitra Terpercaya dalam Transformasi Digital di Era Teknologi
          </p>
        </div>

        <div className="introduction-description-container flex flex-col items-center px-[30px] py-[30px]">
          <div className="introduction-banner bg-slate-200 w-[380px] h-[280px]">
            <img
              src="/images/a2.png"
              className="w-full h-full object-contain"
              alt=""
            />
          </div>

          <div className="introduction-description mt-16">
            <p className="text-lg text-gray-700">
              Didirikan pada tahun 20-- sebagai tim pengembangan aplikasi di
              Kendal, Indonesia, kami beralih ke pengembangan perangkat lunak
              kustom pada tahun 20-- dengan nama Aytech dan terdaftar sebagai
              PT. Digerati Aytech Great Solution. Aytech fokus pada layanan
              business-to-business (B2B), mengkhususkan diri dalam solusi kustom
              dan terintegrasi. Kami memenuhi kebutuhan unik bisnis dan
              mentransformasi perusahaan dengan solusi digital yang kuat dan
              fleksibel, guna meningkatkan kinerja bisnis dan menetapkan standar
              keunggulan baru di industri masing-masing.
            </p>

            <div className="good-service flex items-center gap-3 font-semibold mt-8">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg text-blue-600"
              />
              <h3 className="text-xl">Pengalaman lebih dari ? Tahun</h3>
            </div>
            <div className="good-service flex items-center gap-3 font-semibold mt-4">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg text-blue-600"
              />
              <h3 className="text-xl">Tingkat Penyelesaian 100%</h3>
            </div>
            <div className="good-service flex items-center gap-3 font-semibold mt-4 mb-16">
              <FontAwesomeIcon
                icon={faCheck}
                className="text-lg text-blue-600"
              />
              <h3 className="text-xl">?+ Mitra Kerja</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Introduction;
