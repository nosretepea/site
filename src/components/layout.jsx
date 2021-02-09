import * as React from "react";
import { IconContext } from "react-icons";
import { BsBrightnessLow, BsBrightnessLowFill } from "react-icons/bs";
import SEO from "../components/seo";

const defaultState = {
  displayMode: 'light'
};

const LayoutContext = React.createContext(defaultState);

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMode: 'light',
      isHoveringOnDisplayModeIcon: false
    };
  }

  componentDidMount = () => {
    const displayMode = localStorage.getItem('displayMode');
    if (displayMode === 'dark') {
      this.setState({
        displayMode: 'dark'
      });
    }
  }

  handleHover = () => {
    this.setState({
      isHoveringOnDisplayModeIcon: !this.state.isHoveringOnDisplayModeIcon
    });
  }

  toggleDisplayMode = () => {
    if (this.state.displayMode === 'light') {
      localStorage.setItem('displayMode', 'dark');
      this.setState({
        displayMode: 'dark'
      });
    } else if (this.state.displayMode === 'dark') {
      localStorage.setItem('displayMode', 'light');
      this.setState({
        displayMode: 'light'
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
            <IconContext.Provider value={{ className: "display-mode__icon", size: '1.5em' }}>
              <div
                role="button"
                className="cursor-pointer"
                onKeyDown={this.toggleDisplayMode}
                onClick={this.toggleDisplayMode}
                onMouseEnter={this.handleHover}
                onMouseLeave={this.handleHover}
                tabIndex={0}>
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