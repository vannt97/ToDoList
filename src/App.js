import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Header from "./Component/Home/Header/Header";
import Login from "./Pages/Login/Login";
import Detail from "./Pages/Detail/Detail";
import PageNotFound from "./Pages/PageNotFound/PageNotFound";
import ToDoList from "./Pages/ToDoList/ToDoList";
import ToDoListRFC from "./Pages/ToDoList/ToDoListRFC";
import ExSaga from "./Pages/ExSaga/ExSaga";
import Loading from "./Component/GlobalSetting/LoadingComponent/Loading";
import DemoHOCModal from "./Pages/DemoHocModal/DemoHOCModal";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_TASK_API } from "./Redux/Constants/ToDoListConstant";
import Modal from "./HOC/Modal/Modal";
import HomeTemplate from "./Templates/HomeTemplate/HomeTemplate";
function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_TASK_API });
  }, []);
  return (
    <BrowserRouter>
      <Modal />
      <Loading />
      <Switch>
        <Route exact path="/todolist" component={ToDoList} />
        <Route exact path="/todolistrfc" component={ToDoListRFC} />
        <Route exact path="/" component={ToDoListRFC} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/exsaga" component={ExSaga} />
        <HomeTemplate exact path="/demohocmodal" Component={DemoHOCModal} />
        <HomeTemplate exact path="/login" Component={Login} />
        {/* <Route
          exact
          path="/demohocmodal"
          render={(propsRoute) => {
            return (
              <div>
                <Header />
                <DemoHOCModal {...propsRoute} />
              </div>
            );
          }}
        /> */}
        <Route path="*" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
