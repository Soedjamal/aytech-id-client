import { faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Breadcrumb = ({ currentPath }) => {
  return (
    <>
      <div className="breadcrumb text-white flex items-center gap-3">
        <FontAwesomeIcon icon={faHome} />
        <Link className="hover:text-gray-300" to="/">
          Home
        </Link>
        <h3>{` / ${currentPath}`}</h3>
      </div>
    </>
  );
};

export default Breadcrumb;
