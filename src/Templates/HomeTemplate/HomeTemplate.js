import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Header from "../../Component/Home/Header/Header";

export default function HomeTemplate(props) {
  let { Component, ...restParam } = props;
  return (
    <Route
      {...restParam}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header />
            <Component {...propsRoute} />
          </Fragment>
        );
      }}
    />
  );
}
