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

const GlobalContextProvider: React.FC = ({ children }) => {
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








/*import React, { createContext, useReducer } from "react";

enum Actions {
  SET_DISPLAY_MODE = 'SET_DISPLAY_MODE',
  SET_IS_HOVERING_ON_DISPLAY_MODE_ICON = 'SET_IS_HOVERING_ON_DISPLAY_MODE_ICON',
}

type State = {
  displayMode: string,
  isHoveringOnDisplayModeIcon: boolean
}

const initialState: State = {
  displayMode: "light",
  isHoveringOnDisplayModeIcon: false
};

type SetDisplayModeAction = {
  type: typeof Actions.SET_DISPLAY_MODE
  displayMode: string
}

type SetIsHoveringonDisplayModeIconAction = {
  type: typeof Actions.SET_IS_HOVERING_ON_DISPLAY_MODE_ICON,
  isHoveringOnDisplayModeIcon: boolean
}

type ActionTypes = SetDisplayModeAction | SetIsHoveringonDisplayModeIconAction;

const setDisplayMode = (displayMode: string): ActionTypes => ({
  type: Actions.SET_DISPLAY_MODE,
  displayMode
});

const setIsHoveringOnDisplayModeIcon = (isHoveringOnDisplayModeIcon: boolean): ActionTypes => ({
  type: Actions.SET_IS_HOVERING_ON_DISPLAY_MODE_ICON,
  isHoveringOnDisplayModeIcon
});

const GlobalContext = createContext<[State, React.Dispatch<ActionTypes>]>(
  [initialState, () => { }]
);

const reducer = (state: State, action: ActionTypes): State => {
  switch (action.type) {
    case Actions.SET_DISPLAY_MODE:
      const { displayMode } = action;
      return { ...state, displayMode };
    case Actions.SET_IS_HOVERING_ON_DISPLAY_MODE_ICON:
      const { isHoveringOnDisplayModeIcon } = action;
      return { ...state, isHoveringOnDisplayModeIcon };
    default:
      return state;
  }
}

const GlobalContextProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{
        displayMode: state.displayMode,
        isHoveringOnDisplayModeIcon: state.isHoveringOnDisplayModeIcon,
        setDisplayMode: () => dispatch(SetDisplayModeAction),
        setIsHoveringOnDisplayModeIcon: () => dispatch(SetIsHoveringonDisplayModeIconAction)}}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export { GlobalContextProvider as default, GlobalContext }*/