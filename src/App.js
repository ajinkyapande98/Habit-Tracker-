import Dashboard from "./Components/Dashboard";
import Navbar from "./Components/Navbar";
import { Routes, Route } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import AddHabit from "./Components/AddHabit";
import Calender from "./Components/Calender";
import ShowHabits from "./Components/ShowHabits";
import {
  NotificationContainer,
  NotificationManager,
} from "react-notifications";
import "react-notifications/lib/notifications.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    NotificationManager.success("Welcome to Habit Tracker");
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard notify={NotificationManager} />}
        />
        <Route path="/" element={<AddHabit notify={NotificationManager} />} />
        <Route
          path="/calender"
          element={<Calender notify={NotificationManager} />}
        />
        <Route
          path="/showhabits"
          element={<ShowHabits notify={NotificationManager} />}
        />
      </Routes>
      <NotificationContainer />
    </div>
  );
}

export default App;
