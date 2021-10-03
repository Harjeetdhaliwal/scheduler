export const getAppointmentsForDay = (state, day) => {
  let appointmentsArray = [];

  const theDay = state.days.find(individualDay => individualDay.name === day);

  if (!theDay) {
    return appointmentsArray;
  }
  const appointments = theDay.appointments;
  
  for (const app of appointments) {
    appointmentsArray.push(state.appointments[app]);
  }
  
  return appointmentsArray;
}

export const getInterview = (state, interview) => {
  if (!interview || !state) return null;
  return {student :interview.student, interviewer : state.interviewers[interview.interviewer]};
    
  
}