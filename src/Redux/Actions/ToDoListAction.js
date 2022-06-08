import { CHANGE_INPUT, SET_DATA } from "../Constants/ToDoListConstant";
import Axios from "axios";

export const setData = () => {
  return async (dispatch) => {
    try {
      let { data, status } = await Axios({
        url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
        method: "GET",
      });
      if (status === 200) {
        dispatch({
          type: SET_DATA,
          taskList: data,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };
};

export const addTaskApi = (value) => {
  return (dispatch) => {
    Axios({
      url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
      method: "POST",
      data: {
        taskName: value,
      },
    }).then((res) => {
      dispatch(setData());
    });
  };
};

export const deleteTaskAction = (value) => {
  return (dispatch) => {
    Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${value}`,
      method: "DELETE",
    }).then(() => {
      dispatch(setData());
    });
  };
};

export const checkDoneActionAPI = (taskName) => {
  return (dispatch) => {
    Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    }).then(() => {
      dispatch(setData());
    });
  };
};
export const rejectTaskAction = (taskName) => {
  return (dispatch) => {
    Axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    }).then(() => {
      dispatch(setData());
    });
  };
};
export const changeInput = (name, errorValue, value) => ({
  type: CHANGE_INPUT,
  name,
  errorValue,
  value,
});
