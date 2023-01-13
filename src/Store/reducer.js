import { NotificationManager } from "react-notifications";
import "react-notifications/lib/notifications.css";
// const initialState = {};

const reducer = (state = [], action) => {
  switch (action.type) {
    case "ADDHABIT":
      NotificationManager.success("Habit Added Successfully");

      return [
        ...state,
        {
          title: action.payload.title,
          description: action.payload.description,
          days: {
            sun: action.payload.days.sun,
            mon: action.payload.days.mon,
            tue: action.payload.days.tue,
            wed: action.payload.days.wed,
            thu: action.payload.days.thu,
            fri: action.payload.days.fri,
            sat: action.payload.days.sat,
          },
        },
      ];

    case "EDITHABIT":
      NotificationManager.success("Habit Updated Successfully");

      const index = state.findIndex((item, ind) => {
        return ind === action.payload.id;
      });
      state[index].title = action.payload.title;
      state[index].description = action.payload.description;
      state[index].days.sun = action.payload.days.sun;
      state[index].days.mon = action.payload.days.mon;
      state[index].days.tue = action.payload.days.tue;
      state[index].days.wed = action.payload.days.wed;
      state[index].days.thu = action.payload.days.thu;
      state[index].days.fri = action.payload.days.fri;
      state[index].days.sat = action.payload.days.sat;
      // return [...state];
      return state;

    case "DELETEHABIT":
      NotificationManager.success("Habit Deleted Successfully");

      return state.filter((item, id) => {
        return id !== action.payload.id;
      });

    case "DONE_FOR_TODAY":
      // console.log(action.payload);
      const DashIndex = state.findIndex((item, ind) => {
        return action.payload.id === ind;
      });
      // console.log(state);
      if (action.payload.dayNo === 0) {
        state[DashIndex].days.sun = true;
      } else if (action.payload.dayNo === 1) {
        state[DashIndex].days.mon = true;
      } else if (action.payload.dayNo === 2) {
        state[DashIndex].days.tue = true;
      } else if (action.payload.dayNo === 3) {
        state[DashIndex].days.wed = true;
      } else if (action.payload.dayNo === 4) {
        state[DashIndex].days.thu = true;
      } else if (action.payload.dayNo === 5) {
        state[DashIndex].days.fri = true;
      } else if (action.payload.dayNo === 6) {
        state[DashIndex].days.sat = true;
      }
      // console.log(state[DashIndex].days.sun, DashIndex);
      return state;

    case "UNDONE_FOR_NOW":
      const unDoneInd = state.findIndex((item, ind) => {
        return ind === action.payload.id;
      });
      // console.log(state);
      if (action.payload.dayNo === 0) {
        state[unDoneInd].days.sun = false;
      } else if (action.payload.dayNo === 1) {
        state[unDoneInd].days.mon = false;
      } else if (action.payload.dayNo === 2) {
        state[unDoneInd].days.tue = false;
      } else if (action.payload.dayNo === 3) {
        state[unDoneInd].days.wed = false;
      } else if (action.payload.dayNo === 4) {
        state[unDoneInd].days.thu = false;
      } else if (action.payload.dayNo === 5) {
        state[unDoneInd].days.fri = false;
      } else if (action.payload.dayNo === 6) {
        state[unDoneInd].days.sat = false;
      }
      return state;

    default:
      return state;
  }
};

export default reducer;

// case "EDITHABIT":
//   return state.map((item, ind) => {
//     if (ind === action.payload.id) {
//       // console.log(ind === action.payload.id);
//       return [
//         // ...state,
//         {
//           title: action.payload.title,
//           description: action.payload.description,
//           days: {
//             sun: action.payload.days.sun,
//             mon: action.payload.days.mon,
//             tue: action.payload.days.tue,
//             wed: action.payload.days.wed,
//             thu: action.payload.days.thu,
//             fri: action.payload.days.fri,
//             sat: action.payload.days.sat,
//           },
//         },
//       ];
//     }
//   });
