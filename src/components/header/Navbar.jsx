import { faSearch, faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./header.css";

const Sidebar = ({ onClick, left, ease }) => {
  const location = useLocation();
  return (
    <>
      <div
        className={`menu-container z-50 fixed ${ease} transition-all duration-300 top-0 w-[80%] text-[1rem]
font-bold min-h-screen flex flex-col bg-white px-[20px] py-[25px] ${left}`}
      >
        <div className="menu-title flex items-center justify-between gap-4 mb-8">
          <h3>MENU</h3>
          <div
            onClick={onClick}
            className="close-btn border-2 flex items-center justify-center rounded-lg border-black w-[30px] h-[30px]"
          >
            <FontAwesomeIcon icon={faX} />
          </div>
        </div>

        <ul className="menu-list-container flex flex-col">
          <li className="menu-list py-5">
            <Link
              className={`menu-link ${location.pathname === "/" ? "text-blue-600" : "text-gray-800"}`}
              to="/"
            >
              Home
            </Link>
          </li>
          <li className="menu-list py-5">
            <Link
              className={`menu-link ${location.pathname === "/about" ? "text-blue-600" : "text-gray-800"}`}
              to="/about"
            >
              Tentang Aytech
            </Link>
          </li>
          <li className="menu-list py-5">
            <Link
              className={`menu-link ${location.pathname === "/portfolio" ? "text-blue-600" : "text-gray-800"}`}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </li>
          <li className="menu-list py-5">
            <Link
              className={`menu-link ${location.pathname === "/contact" ? "text-blue-600" : "text-gray-800"}`}
              to="/contact"
            >
              Hubungi Kami
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const Navbar = ({ showOnScroll }) => {
  const [isScroll, setIsScroll] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  useEffect(() => {
    if (showOnScroll == false) return setIsScroll((prev) => true);
    const onScroll = () => {
      if (window.scrollY > 0) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      {sidebar ? (
        <div
          onClick={() => setSidebar(!sidebar)}
          className="hidden-btn z-30 fixed top-0 left-0 bg-black opacity-30 w-full min-h-screen"
        ></div>
      ) : null}
      <nav
        className={`nav-container z-20 transition-all duration-500 drop-shadow-lg
fixed top-0 flex justify-between items-center w-full px-[15px] 
py-[15px] ${isScroll ? " bg-white" : "bg-transparent"}`}
      >
        <div className="nav-logo flex gap-4 items-center">
          <div
            onClick={() => setSidebar(!sidebar)}
            className={`hamburger-menu text-2xl ${isScroll ? "text-black" : "text-white"}`}
          >
            <FontAwesomeIcon
              icon={faBars}
              className={`${isScroll ? "text-black" : "text-white"}`}
            />
          </div>
          <h3
            className={`text-xl  ${isScroll ? "text-blue-500" : "text-white"}`}
          >
            Aytech.Id
          </h3>
        </div>

        <div
          className={`search-icon text-3xl}  ${isScroll ? "text-black" : "text-white"}`}
        >
          <FontAwesomeIcon className="text-xl" icon={faSearch} />
        </div>
        {/* <ul className="nav-list-container"> */}
        {/*   <li className="nav-list"> */}
        {/*     <Link to="/">Home</Link> */}
        {/*     <Link to="/">Tentang Aytech</Link> */}
        {/*     <Link to="/">Portfolio</Link> */}
        {/*     <Link to="/">Hubungi Kami</Link> */}
        {/*   </li> */}
        {/* </ul> */}
      </nav>
      {sidebar ? (
        <Sidebar
          left="left-0"
          ease="ease-out"
          onClick={() => setSidebar(!sidebar)}
        />
      ) : (
        <Sidebar
          left="left-[-100%]"
          ease="ease-in"
          onClick={() => setSidebar(!sidebar)}
        />
      )}
    </>
  );
};

export default Navbar;
