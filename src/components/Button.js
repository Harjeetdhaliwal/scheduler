import React from "react";
import "components/Button.scss";
import classNames from "classnames";

export default function Button(props) {
  const { confirm, danger } = props;

  const buttonClass = classNames({
    button: true,
    "button--confirm": confirm,
    "button--danger": danger,
  });

  return (
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
}
