import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from "prop-types";

//render all the Interviewers
export default function InterviewerList(props) {
  const allInterviewers = props.interviewers.map((interviewer) => (
    <InterviewerListItem
      key={interviewer.id}
      {...interviewer}
      selected={props.value === interviewer.id}
      setInterviewer={(event) => props.onChange(interviewer.id)}
    />
  ));
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">{allInterviewers}</ul>
    </section>
  );
}
//check if ineterviewers prop is an array
InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired,
};
