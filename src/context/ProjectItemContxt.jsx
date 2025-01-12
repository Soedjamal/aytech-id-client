import { createContext, useContext, useEffect, useState } from "react";

const ProjectContext = createContext();

export const ProjectContextProvider = ({ children }) => {
  const [isId, setIsId] = useState("");

  const [item, setItem] = useState(() => {
    localStorage.getItem("item");
  });

  useEffect(() => {
    console.log(item);
  }, []);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(item));
  }, [item]);

  const value = {
    isId,
    setIsId,
    item,
    setItem,
  };

  return (
    <ProjectContext.Provider value={value}>{children}</ProjectContext.Provider>
  );
};

export const useProjectContext = () => useContext(ProjectContext);
