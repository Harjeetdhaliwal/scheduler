import React from "react";
import "components/InterviewerList.scss";
import InterviewerListItem from "./InterviewerListItem";

export default function InterviewerList(props) {

  const allInterviewers = props.interviewers.map(interviewer => <InterviewerListItem key={interviewer.id} {...interviewer} selected={props.interviewer === interviewer.id}/>)
  return (
   <section className="interviewers">
     <h4 className="interviewers__header text--light">Interviewer</h4>
     <ul className="interviewers__list">{allInterviewers}</ul>
   </section>
  );
}