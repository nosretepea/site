import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { BsBrightnessLow, BsBrightnessLowFill } from "react-icons/bs";
import { GlobalContext } from "../util/globalContext";

const DisplayModeButton = () => {
  const { displayMode, setDisplayMode, isHoveringOnDisplayModeIcon, setIsHoveringOnDisplayModeIcon } = useContext(GlobalContext);

  const handleHover = () => {
    setIsHoveringOnDisplayModeIcon(!isHoveringOnDisplayModeIcon);
  }

  const toggleDisplayMode = () => {
    if (displayMode === "light") {
      localStorage.setItem("displayMode", "dark");
      setDisplayMode("dark");
    } else if (displayMode === "dark") {
      localStorage.setItem("displayMode", "light");
      setDisplayMode("light");
    }
  }

  return (
    <IconContext.Provider value={{ className: "display-mode__icon", size: "1.5em" }}>
      <div
        className={`${displayMode} cursor-pointer`}
        onKeyDown={() => toggleDisplayMode()}
        onClick={() => toggleDisplayMode()}
        onMouseEnter={() => handleHover()}
        onMouseLeave={() => handleHover()}>
        {isHoveringOnDisplayModeIcon ? <BsBrightnessLowFill /> : <BsBrightnessLow />}
      </div>
    </IconContext.Provider>
  );
}

export default DisplayModeButton;
