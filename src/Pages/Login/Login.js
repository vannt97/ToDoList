import React, { useState } from "react";
import { Prompt } from "react-router-dom";

export default function Login(props) {
  const [userLogin, setUser] = useState({ userName: "", password: "" });
  const handlerInput = (event) => {
    let { name, value } = event.target;
    setUser({
      ...userLogin,
      [name]: value,
    });
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    if (userLogin.userName === "van" && userLogin.password === "123") {
      props.history.goBack();
    }
  };
  return (
    <form onSubmit={handlerSubmit}>
      <h2>DANG KY</h2>
      <div>
        <label>User Name</label>
        <input name="userName" onChange={handlerInput} />
      </div>
      <div>
        <label>Password</label>
        <input name="password" onChange={handlerInput} />
      </div>
      <button>Submit</button>
      <Prompt
        when={true}
        message={(location) => {
          console.log(location);
          return "ban chac chu";
        }}
      />
    </form>
  );
}
