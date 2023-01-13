function addHabit(title, description, days) {
  return {
    type: "ADDHABIT",
    payload: {
      title: title,
      description: description,
      days: {
        sun: days.sun,
        mon: days.mon,
        tue: days.tue,
        wed: days.wed,
        thu: days.thu,
        fri: days.fri,
        sat: days.sat,
      },
    },
  };
}

function editHabit(id, habit) {
  return {
    type: "EDITHABIT",
    payload: {
      id: id,
      title: habit.title,
      description: habit.description,
      days: {
        sun: habit.days.sun,
        mon: habit.days.mon,
        tue: habit.days.tue,
        wed: habit.days.wed,
        thu: habit.days.thu,
        fri: habit.days.fri,
        sat: habit.days.sat,
      },
    },
  };
}

function removeHabit(id) {
  return {
    type: "DELETEHABIT",
    payload: {
      id: id,
    },
  };
}

// Mark As Completed from DASHBOARD

function TodayDone(dayNo, id) {
  return {
    type: "DONE_FOR_TODAY",
    payload: {
      dayNo,
      id,
    },
  };
}

function TodayUnDone(dayNo, id) {
  return {
    type: "UNDONE_FOR_NOW",
    payload: {
      dayNo,
      id,
    },
  };
}

export { addHabit, editHabit, removeHabit, TodayDone, TodayUnDone };
