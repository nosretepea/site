import React, { createContext, useReducer } from "react";

const initialValues = {
  displayMode: "light",
  isHoveringOnDisplayModeIcon: false,
  setDisplayMode: (displayMode: string) => { },
  setIsHoveringOnDisplayModeIcon: (isHoveringOnDisplayModeIcon: boolean) => { }
}

const GlobalContext = createContext(initialValues);

type State = {
  displayMode: string,
  isHoveringOnDisplayModeIcon: boolean
}

type SetDisplayModeAction = {
  type: "SET_DISPLAY_MODE",
  displayMode: string
}

type SetIsHoveringonDisplayModeIconAction = {
  type: "SET_IS_HOVERING_ON_DISPLAY_MODE_ICON",
  isHoveringOnDisplayModeIcon: boolean
}

type Action = SetDisplayModeAction | SetIsHoveringonDisplayModeIconAction;

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "SET_DISPLAY_MODE":
      return { ...state, displayMode: action.displayMode };
    case "SET_IS_HOVERING_ON_DISPLAY_MODE_ICON":
      return { ...state, isHoveringOnDisplayModeIcon: action.isHoveringOnDisplayModeIcon };
    default:
      return state;
  }
}

const GlobalContextProvider: React.FC<any> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialValues);

  return <GlobalContext.Provider
    value={{
      displayMode: state.displayMode,
      isHoveringOnDisplayModeIcon: state.isHoveringOnDisplayModeIcon,
      setDisplayMode: (displayMode) => dispatch({ type: "SET_DISPLAY_MODE", displayMode: displayMode }),
      setIsHoveringOnDisplayModeIcon: (isHoveringOnDisplayModeIcon) => dispatch({ type: "SET_IS_HOVERING_ON_DISPLAY_MODE_ICON", isHoveringOnDisplayModeIcon: isHoveringOnDisplayModeIcon })
    }}>
    {children}
  </GlobalContext.Provider>
}

export { GlobalContextProvider as default, GlobalContext };