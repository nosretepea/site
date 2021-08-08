import React, { useContext, useEffect, ReactElement } from "react";
import { GlobalContext } from "../util/globalContext";

const PageWrapper: React.FC = ({ children }): ReactElement => {
  const { displayMode, setDisplayMode } = useContext(GlobalContext);

  useEffect(() => {
    const displayModeFromLocalStorage = localStorage.getItem("displayMode");
    setDisplayMode(displayModeFromLocalStorage ? displayModeFromLocalStorage : "light");
  }, []);

  return (
    <div className={`${displayMode} flex h-screen`}>
      {children}
    </div>
  );
}

export default PageWrapper;
