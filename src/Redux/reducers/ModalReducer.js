let stateInitial = {
  Component: <p>Hello world</p>,
};

const ModalReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case "OPEN_LOGIN": {
      state.Component = action.Component;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ModalReducer;
