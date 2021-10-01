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