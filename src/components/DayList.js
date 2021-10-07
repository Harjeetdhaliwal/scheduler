import React from "react";
import DayListItem from "./DayListItem";

//displays all the days and spots remaining
export default function DayList(props) {
  const Days = props.days.map((day) => (
    <DayListItem
      key={day.id}
      {...day}
      selected={day.name === props.day}
      setDay={props.setDay}
    />
  ));
  return <ul>{Days}</ul>;
}
