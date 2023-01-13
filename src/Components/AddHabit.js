import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../Store/action";
const AddHabit = (props) => {
  const { notify } = props;
  const dispatch = useDispatch();
  // const [habit, setHabit] = useState([]);
  // This is Habit Hook
  const [habit, setHabit] = useState({
    title: "",
    description: "",
    days: {
      sun: false,
      mon: false,
      tue: false,
      wed: false,
      thu: false,
      fri: false,
      sat: false,
    },
  });

  // When we click on add Habit Btn, This function get invoked
  function sendHabit() {
    if (habit.title === "") {
      notify.warning("Add Habit");
      return;
    }
    // here i am dispatching addHabit function to the store
    dispatch(addHabit(habit.title, habit.description, habit.days));
    setHabit({
      title: "",
      description: "",
      days: {
        sun: false,
        mon: false,
        tue: false,
        wed: false,
        thu: false,
        fri: false,
        sat: false,
      },
    });
  }
  // console.log(habit);
  return (
    <>
      {/* This is heading */}
      <h1 className="dash-heading">New Habit</h1>
      {/* THis is Add Habit form where you can add any habit */}
      <div className="pop-up-content">
        <label className="title-label" htmlFor="">
          Title:
        </label>
        <input
          className="habit-title"
          type="text"
          placeholder="Title"
          onChange={(e) => setHabit({ ...habit, title: e.target.value })}
          value={habit.title}
          // onChange={(e) => setHabit({ ...habit, title: e.target.value })}
        />
        <label className="title-label" htmlFor="">
          Decription:
        </label>
        <textarea
          style={{ height: 50 }}
          className="habit-title"
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Decription"
          onChange={(e) => setHabit({ ...habit, description: e.target.value })}
          value={habit.description}
          // onChange={(e) => setHabit({ ...habit, description: e.target.value })}
        ></textarea>
        {/* This btn call sendHabit Function to send habit to the store */}
        <button className="add-habit-btn" onClick={() => sendHabit()}>
          Add Habit
        </button>

        {/* <button className="cancle-habit-btn" onClick={() => setPopup(false)}>
          Cancle
        </button> */}
      </div>
    </>
  );
};

export default AddHabit;
