import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h1 className="project-heading">Habit Tracker</h1>
      <li className="line" style={styleC.home}>
        ...........................................................................................
      </li>

      <ul>
        <li style={styleC.home}>
          <Link className="Link" to="/dashboard">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1828/1828673.png"
              alt=""
            />
            Dashboard
          </Link>
        </li>
        <li style={styleC.home}>
          <Link className="Link" to="/showhabits">
            <img
              src="https://cdn-icons-png.flaticon.com/512/560/560525.png"
              alt=""
            />
            Show Habits
          </Link>
        </li>
        <li style={styleC.home}>
          <Link className="Link" to="/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4856/4856564.png"
              alt=""
            />
            New Habits
          </Link>
        </li>
        <li style={styleC.home}>
          <Link className="Link" to="/calender">
            <img
              src="https://cdn-icons-png.flaticon.com/512/5613/5613897.png"
              alt=""
            />
            Calender
          </Link>
        </li>
      </ul>
    </div>
  );
};

const styleC = {
  home: {
    listStyle: "none",
    fontWeight: 600,
    cursor: "pointer",
  },
};

export default Sidebar;
