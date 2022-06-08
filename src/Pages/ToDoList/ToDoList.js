import React, { Component } from "react";
import axios from "axios";
export default class ToDoList extends Component {
  state = {
    listTask: [],
    value: {
      taskName: "",
    },
    error: {
      taskName: "",
    },
  };
  componentDidMount() {
    // let promise = axios({
    //   url: "http://svcy.myclass.vn/api/ToDoList/GetAllTask",
    //   method: "GET",
    // });
    // promise.then((res) => {
    //   this.setState({
    //     listTask: [...res.data],
    //   });
    // });
    // promise.catch((error) => {
    //   console.log(error);
    // });
    this.getData();
  }

  getData = () => {
    axios.get("http://svcy.myclass.vn/api/ToDoList/GetAllTask").then((res) => {
      this.setState({
        listTask: [...res.data],
      });
    });
  };

  renderListTask = () => {
    return this.state.listTask
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
                  this.delTask(task.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                type="button"
                onClick={() => {
                  this.checkDone(task.taskName);
                }}
                className="complete"
              >
                <i className="far fa-check-circle" />
                <i className="fas fa-check-circle" />
              </button>
            </div>
          </li>
        );
      });
  };
  renderListTaskDone = () => {
    return this.state.listTask
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
                  this.delTask(task.taskName);
                }}
              >
                <i className="fa fa-trash-alt" />
              </button>
              <button
                type="button"
                className="complete"
                onClick={() => {
                  this.rejectTask(task.taskName);
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
  delTask = (taskName) => {
    axios({
      url: `http://svcy.myclass.vn/api/ToDoList/deleteTask?taskName=${taskName}`,
      method: "DELETE",
    }).then((res) => {
      this.getData();
    });
  };
  checkDone = (taskName) => {
    axios({
      url: `http://svcy.myclass.vn/api/ToDoList/doneTask?taskName=${taskName}`,
      method: "PUT",
    }).then((res) => {
      this.getData();
    });
  };
  rejectTask = (taskName) => {
    axios({
      url: `http://svcy.myclass.vn/api/ToDoList/rejectTask?taskName=${taskName}`,
      method: "PUT",
    }).then(() => {
      this.getData();
    });
  };
  handlerChange = (e) => {
    let { value, name } = e.target;
    let valueError = "";
    if (value.trim() === "") {
      valueError = `${name} invalid`;
    } else {
      valueError = "";
    }
    this.setState({
      ...this.state,
      value: {
        [name]: value,
      },
      error: {
        [name]: valueError,
      },
    });
  };
  handlerSubmit = (e) => {
    e.preventDefault();
    if (this.state.error.taskName === "") {
      axios({
        url: "http://svcy.myclass.vn/api/ToDoList/AddTask",
        method: "POST",
        data: { taskName: this.state.value.taskName },
      }).then((res) => {
        this.setState({
          ...this.state,
          value: {
            taskName: "",
          },
        });
        this.getData();
      });
    }
  };
  componentDidUpdate() {}
  render() {
    return (
      <form onSubmit={this.handlerSubmit} className="card">
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
                name="taskName"
                type="text"
                onChange={this.handlerChange}
                value={this.state.value.taskName}
                placeholder="Enter an activity..."
              />
              <button id="addItem" onClick={this.handlerSubmit}>
                <i className="fa fa-plus" />
              </button>
            </div>
            <p style={{ color: "red" }}>{this.state.error.taskName}</p>
            <div className="card__todo">
              {/* Uncompleted tasks */}
              <ul className="todo" id="todo">
                {this.renderListTask()}
              </ul>
              {/* Completed tasks */}
              <ul className="todo" id="completed">
                {this.renderListTaskDone()}
              </ul>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
