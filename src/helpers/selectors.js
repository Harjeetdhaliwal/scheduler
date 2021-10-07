//fetch all the appointments for a particular day
export const getAppointmentsForDay = (state, day) => {
  let appointmentsArray = [];
  const theDay = state.days.find((individualDay) => individualDay.name === day);

  if (!theDay) {
    return appointmentsArray;
  }
  const appointments = theDay.appointments;
  for (const app of appointments) {
    appointmentsArray.push(state.appointments[app]);
  }

  return appointmentsArray;
};

//fetch info(student name and interviewer name) about the interview
export const getInterview = (state, interview) => {
  if (!interview || !state) return null;

  return {
    student: interview.student,
    interviewer: state.interviewers[interview.interviewer],
  };
};

//fetch all the instructors available for the day
export const getInterviewersForDay = (state, day) => {
  let interviewersArray = [];
  const theDay = state.days.find((individualDay) => individualDay.name === day);

  if (!theDay) {
    return interviewersArray;
  }

  for (const interviewer of theDay.interviewers) {
    interviewersArray.push(state.interviewers[interviewer]);
  }

  return interviewersArray;
};
