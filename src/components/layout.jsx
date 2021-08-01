import * as React from "react";
import { IconContext } from "react-icons";
import { BsBrightnessLow, BsBrightnessLowFill } from "react-icons/bs";
import SEO from "../components/seo";

const defaultState = {
  displayMode: "light"
};

const LayoutContext = React.createContext(defaultState);

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMode: "light",
      isHoveringOnDisplayModeIcon: false
    };
  }

  componentDidMount = () => {
    const displayMode = localStorage.getItem("displayMode");
    this.setState({
      displayMode: displayMode ? displayMode : "light"
    });
  }

  handleHover = () => {
    this.setState({
      isHoveringOnDisplayModeIcon: !this.state.isHoveringOnDisplayModeIcon
    });
  }

  toggleDisplayMode = () => {
    if (this.state.displayMode === "light") {
      localStorage.setItem("displayMode", "dark");
      this.setState({
        displayMode: "dark"
      });
    } else if (this.state.displayMode === "dark") {
      localStorage.setItem("displayMode", "light");
      this.setState({
        displayMode: "light"
      });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <LayoutContext.Provider value={this.state}>
        <SEO />
        <div className={`${this.state.displayMode} flex h-screen p-2`}>
          <div className="absolute right-0 px-4 py-2">
            <IconContext.Provider value={{ className: "display-mode__icon", size: "1.5em" }}>
              <div
                className="cursor-pointer"
                onKeyDown={this.toggleDisplayMode}
                onClick={this.toggleDisplayMode}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}>
                {this.state.isHoveringOnDisplayModeIcon ? <BsBrightnessLowFill /> : <BsBrightnessLow />}
              </div>
            </IconContext.Provider>
          </div>
          {children}
        </div>
      </LayoutContext.Provider>
    );
  }
};

export { LayoutContext };

/*
import React, { useEffect, useState } from "react";
import GlobalContextProvider from "../util/globalContext.js";
import { IconContext } from "react-icons";
import { BsBrightnessLow, BsBrightnessLowFill } from "react-icons/bs";
import SEO from "../components/seo";

const Layout = ({ children }) => {
  const [displayMode, setDisplayMode] = useState("light");
  const [isHoveringOnDisplayModeIcon, setIsHoveringOnDisplayModeIcon] = useState(false);

  useEffect(() => {
    const displayModeFromLocalStorage = localStorage.getItem("displayMode");
    setDisplayMode(displayModeFromLocalStorage ? displayModeFromLocalStorage : "light");
  }, []);

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
    <GlobalContextProvider>
      <SEO />
      <div className={`${displayMode} flex h-screen p-2`}>
        <div className="absolute right-0 px-4 py-2">
          <IconContext.Provider value={{ className: "display-mode__icon", size: "1.5em" }}>
            <div
              className="cursor-pointer"
              onKeyDown={toggleDisplayMode}
              onClick={toggleDisplayMode}
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}>
              {isHoveringOnDisplayModeIcon ? <BsBrightnessLowFill /> : <BsBrightnessLow />}
            </div>
          </IconContext.Provider>
        </div>
        {children}
      </div>
    </GlobalContextProvider>
  );
}

export default Layout;
*/