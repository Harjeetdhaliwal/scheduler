import React from "react";
import "components/InterviewerListItem.scss";
import classNames from "classnames";

export default function InterviewerListItem(props) {

  const {name, avatar, selected, setInterviewer} = props;

  const interviewerClasses = classNames( "interviewers__item", {
    "interviewers__item--selected" : selected,
    "interviewers__item--image": avatar,

  });

  const showNameWhenSelected = () => {
    if (selected) {
      return name;
    }
  }

  return (
    <li className={interviewerClasses} onClick={() => setInterviewer(name)}>
      <img 
      className="interviewers__item-image"
      src={avatar}
      alt="Sylvia Palmer"
      />
      {showNameWhenSelected()}
    </li>
  );
}