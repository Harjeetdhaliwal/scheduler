import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {},
  });

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

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    const newState = {
      ...state,
      appointments,
    };

    return axios
      .put(`/api/appointments/${id}`, { ...appointment })
      .then(() => updateSpots(newState));
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
    };
    appointment.interview = null;

    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };

    //-------------NEW state with updated appointments ------------
    const newState = {
      ...state,
      appointments,
    };

    return axios
      .delete(`/api/appointments/${id}`)
      .then((res) => updateSpots(newState, id));
  };

  //-----------------------Update spots function ------------

  const updateSpots = (state) => {
    const dayName = state.day;
    const day = state.days.find((day) => day.name === dayName);
    const dayIndex = state.days.findIndex((day) => day.name === dayName);
    const appointmentsArrayForDay = day.appointments;

    let remainingSpots = 0;
    for (const appt of appointmentsArrayForDay) {
      if (state.appointments[appt].interview === null) {
        remainingSpots += 1;
      }
    }

    const updatedSpotsForDay = { ...day, spots: remainingSpots };
    const days = [...state.days];
    days[dayIndex] = updatedSpotsForDay;

    setState({ ...state, days });
  };

  return { state, setDay, cancelInterview, bookInterview };
}
