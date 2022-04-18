import React, { ReactElement, useContext } from "react";
import { IconContext } from "react-icons";
import { BsBrightnessLow, BsBrightnessLowFill } from "react-icons/bs";
import { GlobalContext } from "../util/globalContext";

const DisplayModeButton: React.FC = (): ReactElement => {
  const { displayMode, setDisplayMode, isHoveringOnDisplayModeIcon, setIsHoveringOnDisplayModeIcon } = useContext(GlobalContext);

  const handleHover = (isHover: boolean): void => {
    setIsHoveringOnDisplayModeIcon(isHover);
  }

  const toggleDisplayMode = (): void => {
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
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}>
        {isHoveringOnDisplayModeIcon ? <BsBrightnessLowFill /> : <BsBrightnessLow />}
      </div>
    </IconContext.Provider>
  );
}

export default DisplayModeButton;
