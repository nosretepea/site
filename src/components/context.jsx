import React from "react";

const defaultContextValue = {
  data: {
    displayMode: 'light',
    isHoveringOnDisplayModeIcon: false
  },
  set: () => { },
};

const { Provider, Consumer } = React.createContext(defaultContextValue);

class ContextProviderComponent extends React.Component {
  constructor(props) {
    super(props);

    this.setData = this.setData.bind(this);
    this.state = {
      ...defaultContextValue,
      set: this.setData,
    };
  }

  setData(newData) {
    this.setState((state) => ({
      data: {
        ...state.data,
        ...newData,
      },
    }));
  }

  render() {
    return <Provider value={this.state.data}>{this.props.children}</Provider>
  }
};

export { Consumer as default, ContextProviderComponent };