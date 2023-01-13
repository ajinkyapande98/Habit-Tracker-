import { useDispatch } from "react-redux";
import { editHabit } from "../Store/action";

const EditContent = (props) => {
  const { habit, setHabit, updatingId, setUnlockEdit, notify } = props;

  const dispatch = useDispatch();
  const sendingUpdatedHabit = () => {
    setUnlockEdit(false);
    if (habit.title === "") {
      notify.warning("Enter Title");
      return;
    }
    dispatch(editHabit(updatingId, habit));
    // setHabit({
    //   title: "",
    //   description: "",
    //   days: {
    //     sun: false,
    //     mon: false,
    //     tue: false,
    //     wed: false,
    //     thu: false,
    //     fri: false,
    //     sat: false,
    //   },
    // });
  };
  // {
  //   console.log(habit);
  // }
  return (
    <>
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
        ></textarea>
        {/* Edit Content */}
        {console.log(habit.days)}
        <div className="Popup-days">
          {habit.days.sun ? (
            <input
              type="checkbox"
              name="sunday"
              checked
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, sun: e.target.checked },
                })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="sunday"
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, sun: e.target.checked },
                })
              }
            />
          )}
          <label htmlFor="">Sun</label>

          {habit.days.mon ? (
            <input
              type="checkbox"
              name="monday"
              id=""
              checked
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, mon: e.target.checked },
                })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="monday"
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, mon: e.target.checked },
                })
              }
            />
          )}
          <label htmlFor="">Mon</label>

          {habit.days.tue ? (
            <input
              type="checkbox"
              name="tuesday"
              id=""
              checked
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, tue: e.target.checked },
                })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="tuesday"
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, tue: e.target.checked },
                })
              }
            />
          )}
          <label htmlFor="">Tue</label>

          {habit.days.wed ? (
            <input
              type="checkbox"
              name="wednessday"
              id=""
              checked
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, wed: e.target.checked },
                })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="wednessday"
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, wed: e.target.checked },
                })
              }
            />
          )}

          <label htmlFor="">Wed</label>

          {habit.days.thu ? (
            <input
              type="checkbox"
              name="thursday"
              id=""
              checked
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, thu: e.target.checked },
                })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="thursday"
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, thu: e.target.checked },
                })
              }
            />
          )}

          <label htmlFor="">Thu</label>
          {habit.days.fri ? (
            <input
              type="checkbox"
              name="friday"
              id=""
              checked
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, fri: e.target.checked },
                })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="friday"
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, fri: e.target.checked },
                })
              }
            />
          )}

          <label htmlFor="">Fri</label>
          {habit.days.sat ? (
            <input
              type="checkbox"
              name="saturday"
              id=""
              checked
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, sat: e.target.checked },
                })
              }
            />
          ) : (
            <input
              type="checkbox"
              name="saturday"
              id=""
              onChange={(e) =>
                setHabit({
                  ...habit,
                  days: { ...habit.days, sat: e.target.checked },
                })
              }
            />
          )}

          <label htmlFor="">Sat</label>
        </div>

        <button className="add-habit-btn" onClick={() => sendingUpdatedHabit()}>
          Add Habit
        </button>

        {/* <button className="cancle-habit-btn" onClick={() => setPopup(false)}>
          Cancle
        </button> */}
      </div>
    </>
  );
};

export default EditContent;
