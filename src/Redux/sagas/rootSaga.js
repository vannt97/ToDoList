import { all } from "redux-saga/effects";
import {
  theodoiActionGetTaskApi,
  theoDoiActionAddTask,
  theoDoiActionDoneTask,
  theDoiActionDelTask,
  theoDoiActionRejectTask,
} from "./ToDoListSaga";

export function* rootSaga() {
  yield all([
    theodoiActionGetTaskApi(),
    theoDoiActionAddTask(),
    theoDoiActionDoneTask(),
    theDoiActionDelTask(),
    theoDoiActionRejectTask(),
  ]);
}
