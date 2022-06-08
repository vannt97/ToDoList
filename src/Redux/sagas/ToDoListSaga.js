import { call, fork, delay, takeLatest, put, take } from "redux-saga/effects";
import {
  SET_DATA,
  GET_TASK_API,
  ADD_TASK_API,
  DONE_TASK,
  DELETE_TASK,
  REJECT_TASK,
} from "../Constants/ToDoListConstant";
import { toDoListService } from "../../services/ToDoListServices";
import { STATUS_CODE } from "../../Util/constants/settingSystem";
import { DISPLAY_LOADING, HIDE_LOADING } from "../Constants/LoadingConstant";
function* getTaskApi(action) {
  yield put({ type: DISPLAY_LOADING });

  try {
    yield delay(1000);
    let res = yield call(toDoListService.getTaskApi);
    if (res.status === STATUS_CODE.SUCCESS) {
      yield put({ type: SET_DATA, taskList: res.data });
    }
  } catch (err) {
    console.log(err);
  }
  yield put({ type: HIDE_LOADING });
}

function* addTask(action) {
  try {
    yield call(() => {
      return toDoListService.addTaskAPi(action.value.taskName);
    });

    let res = yield call(toDoListService.getTaskApi);
    if (res.status === STATUS_CODE.SUCCESS) {
      yield put({ type: SET_DATA, taskList: res.data });
    }
  } catch (err) {
    console.log(err);
  }
}
function* doneTask(action) {
  try {
    let res = yield call(() => {
      return toDoListService.checkDone(action.value);
    });
    if (res.status === STATUS_CODE.SUCCESS) {
      yield put({ type: GET_TASK_API });
    }
  } catch (err) {
    console.log(err);
  }
}
function* delTask(action) {
  try {
    let res = yield call(() => {
      return toDoListService.delTask(action.value);
    });
    if (res.status === STATUS_CODE.SUCCESS) {
      yield put({ type: GET_TASK_API });
    }
  } catch (err) {
    console.log(err);
  }
}
function* rejectTask(action) {
  try {
    let res = yield call(() => {
      return toDoListService.rejectTask(action.value);
    });
    if (res.status === STATUS_CODE.SUCCESS) {
      yield put({ type: GET_TASK_API });
    }
  } catch (err) {
    console.log(err);
  }
}
export function* theodoiActionGetTaskApi() {
  yield takeLatest(GET_TASK_API, getTaskApi);
}

export function* theoDoiActionAddTask() {
  yield takeLatest(ADD_TASK_API, addTask);
}

export function* theoDoiActionDoneTask() {
  yield takeLatest(DONE_TASK, doneTask);
}

export function* theDoiActionDelTask() {
  yield takeLatest(DELETE_TASK, delTask);
}

export function* theoDoiActionRejectTask() {
  yield takeLatest(REJECT_TASK, rejectTask);
}
