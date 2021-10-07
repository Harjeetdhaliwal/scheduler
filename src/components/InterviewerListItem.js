import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

//render individual interviewer in the interviewers list
export default function InterviewerListItem(props) {
  const { name, avatar, selected, setInterviewer } = props;

  const interviewerClasses = classNames("interviewers__item", {
    "interviewers__item--selected": selected,
    "interviewers__item--image": avatar,
  });

  //only show the name of the interviewer when selected
  const showNameWhenSelected = () => {
    if (selected) {
      return name;
    }
  };

  return (
    <li className={interviewerClasses} onClick={setInterviewer}>
      <img className="interviewers__item-image" src={avatar} alt={name} />
      {showNameWhenSelected()}
    </li>
  );
}
