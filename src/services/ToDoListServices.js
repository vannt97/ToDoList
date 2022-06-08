import Axios from "axios";
import { retry } from "redux-saga/effects";
import { DOMAIN } from "../Util/constants/settingSystem";

class ToDoListServices {
  getTaskApi = () => {
    return Axios({
      url: `${DOMAIN}/ToDoList/GetAllTask`,
      method: "GET",
    });
  };
  addTaskAPi = (taskName) => {
    return Axios({
      url: `${DOMAIN}/ToDoList/AddTask`,
      method: "POST",
      data: { taskName: taskName },
    });
  };
  checkDone = (taskName) => {
    return Axios({
      url: `${DOMAIN}/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    });
  };
  delTask = (taskName) => {
    return Axios({
      url: `${DOMAIN}/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    });
  };
  rejectTask = (taskName) => {
    return Axios({
      url: `${DOMAIN}/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    });
  };
}

export const toDoListService = new ToDoListServices();
