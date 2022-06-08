import { CHANGE_INPUT, SET_DATA } from "../Constants/ToDoListConstant";

let stateInitial = {
  taskList: [],
  value: {
    taskName: "",
  },
  error: {
    taskName: "",
  },
};

const ExReducer = (state = stateInitial, action) => {
  switch (action.type) {
    case SET_DATA: {
      return {
        ...state,
        taskList: [...action.taskList],
        value: { taskName: "" },
      };
    }
    case CHANGE_INPUT: {
      return {
        ...state,
        value: { [action.name]: action.value },
        error: { [action.name]: action.errorValue },
      };
    }
    default: {
      return state;
    }
  }
};

export default ExReducer;
