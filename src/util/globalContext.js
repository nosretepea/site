import React, { createContext, useReducer } from "react";

const initialState = {
  displayMode: "light",
  isHoveringOnDisplayModeIcon: false
};

const actions = {
  SET_DISPLAY_MODE: "SET_DISPLAY_MODE",
  SET_IS_HOVERING_ON_DISPLAY_MODE_ICON: "SET_IS_HOVERING_ON_DISPLAY_MODE_ICON"
}

const reducer = (state, action) => {
  switch (action.type) {
    case actions.SET_DISPLAY_MODE:
      return { ...state, displayMode: action.value };
    case actions.SET_IS_HOVERING_ON_DISPLAY_MODE_ICON:
      return { ...state, isHoveringOnDisplayModeIcon: action.value };
    default:
      return state;
  }
}

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    displayMode: state.displayMode,
    isHoveringOnDisplayModeIcon: state.isHoveringOnDisplayModeIcon,
    setDisplayMode: value => {
      dispatch({ type: actions.SET_DISPLAY_MODE, value });
    },
    setIsHoveringOnDisplayModeIcon: value => {
      dispatch({ type: actions.SET_IS_HOVERING_ON_DISPLAY_MODE_ICON, value });
    }
  }

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalContextProvider as default, GlobalContext }