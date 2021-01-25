import * as React from "react";
import { IconContext } from "react-icons";
import { BsBrightnessLow, BsBrightnessLowFill } from "react-icons/bs";

/*type ModeType = 'light' | 'dark';

interface ILayoutState {
  displayMode: ModeType;
  isHoveringOnDisplayModeIcon: boolean
}*/

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayMode: 'light',
      isHoveringOnDisplayModeIcon: false
    };
  }

  toggleMode = () => {
    if (this.state.displayMode === 'light') {
      this.setState({
        displayMode: 'dark'
      })
    } else if (this.state.displayMode === 'dark') {
      this.setState({
        displayMode: 'light'
      })
    }
  }

  handleHover = () => {
    this.setState({
      isHoveringOnDisplayModeIcon: !this.state.isHoveringOnDisplayModeIcon
    })
  }

  render() {  
    const { children } = this.props;

    return (
      <div className={`${this.state.displayMode} flex h-screen p-2`}>
        <div className="text-red-500 absolute right-0 px-4 py-2">
          <IconContext.Provider value={{ className: "display-mode__icon", size: '1.5em' }}>
            <div className="cursor-pointer" onClick={this.toggleMode} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
              {this.state.isHoveringOnDisplayModeIcon ? <BsBrightnessLowFill /> : <BsBrightnessLow />}
            </div>
          </IconContext.Provider>
        </div>
        {children}
      </div>
    )
  }
}