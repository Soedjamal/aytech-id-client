import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";

const ToUp = () => {
  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 500) {
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
      <div className={`to-up-container fixed bottom-[10px] right-5`}>
        <div
          onClick={() => window.scrollTo({ top: -10, behavior: "smooth" })}
          className={`to-up-icon drop-shadow-lg transition-all ease-linear duration-200 rounded-full flex justify-center 
          items-center w-[50px] h-[50px] ${isScroll ? "bg-white" : "opacity-0"}`}
        >
          <FontAwesomeIcon className="text-2xl" icon={faArrowUp} />
        </div>
      </div>
    </>
  );
};

export default ToUp;
