import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

  //requests to the api server to fetch data
  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers"),
    ]).then((all) => {
      setState((prev) => ({
        ...prev,
        days: all[0].data,
        appointments: all[1].data,
        interviewers: all[2].data,
      }));
    });
  }, []);

  const setDay = (day) => setState({ ...state, day });

  //adds new appointment to the interviews object and change state
  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    return axios
      .put(`/api/appointments/${id}`, { ...appointment })
      .then(() => updateSpots(state, appointments));
  };

  //remove the appointment and change the state
  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
    };
    appointment.interview = null;

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //new state with updated appointments

    return axios
      .delete(`/api/appointments/${id}`)
      .then((res) => updateSpots(state, appointments));
  };

  /*Update spots function takes in new 
  state when new appointment is created or deleted
  and update the spots for that particular day*/

  const updateSpots = (state, appointments) => {
    const dayName = state.day;
    const day = state.days.find((day) => day.name === dayName);
    const dayIndex = state.days.findIndex((day) => day.name === dayName);
    const appointmentsArrayForDay = day.appointments;

    //count appointments with null value for interview
    let remainingSpots = 0;
    for (const appt of appointmentsArrayForDay) {
      if (appointments[appt].interview === null) {
        remainingSpots += 1;
      }
    }

    const updatedSpotsForDay = { ...day, spots: remainingSpots };
    const days = [...state.days];
    days[dayIndex] = updatedSpotsForDay;

    setState({ ...state, appointments, days });
  };

  return { state, setDay, cancelInterview, bookInterview };
}
