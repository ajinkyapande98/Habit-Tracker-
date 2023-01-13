import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeHabit } from "../Store/action";
import EditContent from "./EditContent";

const ShowHabits = (props) => {
  const { notify } = props;
  const selection = useSelector((state) => {
    // console.log(state);
    return state.reducer;
  });
  const dispatch = useDispatch();

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

  const [unlockEdit, setUnlockEdit] = useState(false);
  const [updatingId, setUpdatingId] = useState(0);

  const updateHabits = (id) => {
    setUnlockEdit(true);
    setUpdatingId(id);
    setHabit({
      title: selection[id].title,
      description: selection[id].description,
      days: {
        sun: selection[id].days.sun,
        mon: selection[id].days.mon,
        tue: selection[id].days.tue,
        wed: selection[id].days.wed,
        thu: selection[id].days.thu,
        fri: selection[id].days.fri,
        sat: selection[id].days.sat,
      },
    });
  };

  // console.log(habit);

  return (
    <div className="show-habits-container">
      {/* THis is Heding */}
      <h1
        style={{
          fontSize: 33,
          top: -15,
          right: 460,
          position: "absolute",
          backgroundColor: "azure",
          padding: 8,
          borderRadius: 5,
          boxShadow: "0 0 5px 1px rgb(204, 204, 204)",
        }}
      >
        Habits
      </h1>

      {/* Here is Iterating over the Array of Habit object */}
      <div className="habits-list">
        {selection.map((item, ind) => {
          return (
            <div key={ind} className="inner-container">
              {/* {console.log(item)} */}
              <li>{ind + 1}.</li>
              <li>{item.title}</li>
              <div className="days">
                {selection[ind].days.sun ? (
                  <img
                    className="sun"
                    src="https://cdn-icons-png.flaticon.com/512/3666/3666227.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="sun"
                    src="https://cdn-icons-png.flaticon.com/512/3665/3665953.png"
                    alt=""
                  />
                )}
                {selection[ind].days.mon ? (
                  <img
                    className="mon"
                    src="https://cdn-icons-png.flaticon.com/512/3665/3665975.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="mon"
                    src="https://cdn-icons-png.flaticon.com/512/6646/6646519.png"
                    alt=""
                  />
                )}
                {selection[ind].days.tue ? (
                  <img
                    className="tue"
                    src="https://cdn-icons-png.flaticon.com/512/3666/3666228.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="tue"
                    src="https://cdn-icons-png.flaticon.com/512/3665/3665986.png"
                    alt=""
                  />
                )}

                {selection[ind].days.wed ? (
                  <img
                    className="wed"
                    src="https://cdn-icons-png.flaticon.com/512/3666/3666231.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="wed"
                    src="https://cdn-icons-png.flaticon.com/512/3666/3666004.png"
                    alt=""
                  />
                )}

                {selection[ind].days.thu ? (
                  <img
                    className="thu"
                    src="https://cdn-icons-png.flaticon.com/512/3666/3666228.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="thu"
                    src="https://cdn-icons-png.flaticon.com/512/3665/3665986.png"
                    alt=""
                  />
                )}

                {selection[ind].days.fri ? (
                  <img
                    className="fri"
                    src="https://cdn-icons-png.flaticon.com/512/3665/3665934.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="fri"
                    src="https://cdn-icons-png.flaticon.com/512/3665/3665915.png"
                    alt=""
                  />
                )}

                {selection[ind].days.sat ? (
                  <img
                    className="sat"
                    src="https://cdn-icons-png.flaticon.com/512/3666/3666227.png"
                    alt=""
                  />
                ) : (
                  <img
                    className="sat"
                    src="https://cdn-icons-png.flaticon.com/512/3665/3665953.png"
                    alt=""
                  />
                )}
              </div>
              {unlockEdit ? (
                ""
              ) : (
                <img
                  onClick={() => updateHabits(ind)}
                  className="edit"
                  src="https://cdn-icons-png.flaticon.com/512/1160/1160515.png"
                  alt=""
                />
              )}
              <img
                onClick={() => dispatch(removeHabit(ind))}
                className="delete"
                src="https://cdn-icons-png.flaticon.com/512/6861/6861362.png"
                alt=""
              />
            </div>
          );
        })}

        {/* THis is Edit Content Component */}
        {unlockEdit ? (
          <div className="Edit-content">
            <EditContent
              habit={habit}
              setHabit={setHabit}
              notify={notify}
              updatingId={updatingId}
              setUnlockEdit={setUnlockEdit}
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ShowHabits;
