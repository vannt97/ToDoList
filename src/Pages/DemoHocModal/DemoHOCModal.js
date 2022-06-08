import React from "react";
import { useDispatch } from "react-redux";
import SildeDown from "../../HOC/Modal/SildeDown";
import Home from "../Home/Home";
import Login from "../Login/Login";
export default function DemoHOCModal(props) {
  console.log(props);
  let XsildeDown = () => {
    return new SildeDown(Home);
  };
  let dispatch = useDispatch();
  return (
    <div>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => {
          dispatch({
            type: "OPEN_LOGIN",
            Component: <Login />,
          });
        }}
      >
        Launch demo modal
      </button>
      <button
        type="button"
        className="btn btn-primary"
        data-toggle="modal"
        data-target="#exampleModal"
        onClick={() => {
          dispatch({
            type: "OPEN_LOGIN",
            Component: <Home />,
          });
        }}
      >
        DANG KY
      </button>

      <XsildeDown />
    </div>
  );
}
