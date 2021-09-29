import React from "react";
import "components/DayListItem.scss"
import classNames from "classnames";

export default function DayListItem(props) {
  const {name, spots, setDay, selected} = props;

  const classes = classNames({
   "day-list__item": true,
   "day-list__item--selected": selected,
   "day-list__item--full": !spots
  });
  
  const formatSpots = () => {
    if (spots === 0) {
      return "no spots remaining";
    } else if (spots === 1){
      return "1 spot remaining";
    } else {
      return `${spots} spots remaining`;
    }
  }

  return (
    <li className={classes} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}