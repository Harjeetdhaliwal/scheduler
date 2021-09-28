import React from "react";
import "components/DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  const {name, spots, setDay} = props;

  const classes = classNames({
   "day-list__item": true,
   "day-list__item--selected": props.selected,
   "day-list__item--full": !props.spots
  })
  return (
    <li className={classes} onClick={() => setDay(props.name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{spots}</h3>
    </li>
  );
}