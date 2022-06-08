import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { GET_TASK_API } from "../../Redux/Constants/ToDoListConstant";
export default function Home() {
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch({ type: GET_TASK_API });
  }, []);
  return <div>Home</div>;
}
