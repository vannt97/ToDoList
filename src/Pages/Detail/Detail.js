import React from "react";

export default function Detail(props) {
  return (
    <div>
      {props.match.params.id}
      {props.match.path}
    </div>
  );
}
