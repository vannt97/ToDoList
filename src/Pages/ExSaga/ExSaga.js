import React, { useEffect } from "react";
import "./ExSaga.css";
import { useDispatch, useSelector } from "react-redux";
import {
  changeInput,
  setData,
  addTaskApi,
  deleteTaskAction,
  checkDoneActionAPI,
  rejectTaskAction,
} from "../../Redux/Actions/ToDoListAction";
import {
  ADD_TASK_API,
  DELETE_TASK,
  DONE_TASK,
  GET_TASK_API,
  REJECT_TASK,
} from "../../Redux/Constants/ToDoListConstant";
export default function ExSaga() {
  let dispatch = useDispatch();
  let { taskList, value, error } = useSelector((state) => state.ExReducer);

  useEffect(() => {
    dispatch({ type: GET_TASK_API });
  }, []);

  const renderTaskDoTo = () => {
    return taskList
      .filter((item) => !item.status)
      .map((task, index) => {
        return (
          <li key={index}>
            <span>{task.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  delTask(task.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                type="button"
                onClick={() => {
                  checkDone(task.taskName);
                }}
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  const renderTaskDone = () => {
    return taskList
      .filter((item) => item.status)
      .map((task, index) => {
        return (
          <li key={index}>
            <span>{task.taskName}</span>
            <div className="buttons">
              <button
                className="remove"
                type="button"
                onClick={() => {
                  delTask(task.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                className="complete"
                type="button"
                onClick={() => {
                  reject(task.taskName);
                }}
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  const checkDone = (taskName) => {
    dispatch({ type: DONE_TASK, value: taskName });
  };
  const reject = (taskName) => {
    dispatch({ type: REJECT_TASK, value: taskName });
  };
  const addTask = (e) => {
    e.preventDefault();
    if (error.taskName === "") {
      dispatch({ type: ADD_TASK_API, value: value });
    }
  };
  const handlerChange = (e) => {
    let { name, value } = e.target;
    let errorValue = "";
    if (value.trim() === "") {
      errorValue = `${name} invalid`;
    }
    dispatch(changeInput(name, errorValue, value));
    // setToDoList({
    //   ...stateToDoList,
    //   value: { [name]: value },
    //   error: { [name]: errorValue },
    // });
  };
  const delTask = (taskName) => {
    dispatch({ type: DELETE_TASK, value: taskName });
  };

  return (
    <form className="card" onSubmit={addTask}>
      <div className="card__header">
        <img src="./bg.png" alt="anh" />
      </div>
      <div className="card__body">
        <div className="card__content">
          <div className="card__title">
            <h2>My Tasks</h2>
            <p>September 9,2020</p>
          </div>
          <div className="card__add">
            <input
              id="newTask"
              type="text"
              placeholder="Enter an activity..."
              onChange={handlerChange}
              name="taskName"
              value={value.taskName}
            />
            <button id="addItem" type="button" onClick={addTask}>
              <i className="fa fa-plus" />
            </button>
          </div>
          <p>{error.taskName}</p>
          <div className="card__todo">
            {/* Uncompleted tasks */}
            <ul className="todo" id="todo">
              {renderTaskDoTo()}
            </ul>
            {/* Completed tasks */}
            <ul className="todo" id="completed">
              {renderTaskDone()}
            </ul>
          </div>
        </div>
      </div>
    </form>
  );
}
