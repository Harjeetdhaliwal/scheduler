import React from "react";
import "components/DayListItem.scss";
import classNames from "classnames";

//display individual days in DayList
export default function DayListItem(props) {
  const { name, spots, setDay, selected } = props;

  //group all the classes based on props that needs to apply to each Day
  const classes = classNames({
    "day-list__item": true,
    "day-list__item--selected": selected,
    "day-list__item--full": !spots,
  });

  //Format the message according to the number of spots remaining
  const formatSpots = () => {
    if (spots === 0) {
      return "no spots remaining";
    } else if (spots === 1) {
      return "1 spot remaining";
    } else {
      return `${spots} spots remaining`;
    }
  };

  return (
    <li data-testid={"day"} className={classes} onClick={() => setDay(name)}>
      <h2 className="text--regular">{name}</h2>
      <h3 className="text--light">{formatSpots()}</h3>
    </li>
  );
}
