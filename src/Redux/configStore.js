import { applyMiddleware, combineReducers, createStore } from "redux";
import ExReducer from "./reducers/ExReducer";
import reduxThunk from "redux-thunk";
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./sagas/rootSaga";
import LoadingReducer from "./reducers/LoadingReducer";
import ModalReducer from "./reducers/ModalReducer";
const middleWareSaga = createMiddleWareSaga();

const rootReducer = combineReducers({
  ExReducer,
  LoadingReducer,
  ModalReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(reduxThunk, middleWareSaga)
);
middleWareSaga.run(rootSaga);

export default store;
