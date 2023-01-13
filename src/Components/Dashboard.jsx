import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodayDone, TodayUnDone } from "../Store/action";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

// JavaScript Pie Chart reference Element
ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = (props) => {
  //  Array Destructering
  const { notify } = props;

  // Getting Day in Number
  const day = new Date().getDay();

  // All Hooks
  // This hook is for getting state from reducer
  const select = useSelector((state) => {
    return state.reducer;
  });

  var chartValue = [0, 0, 0, 0, 0, 0, 0];
  const [datas, setData] = useState({
    on: false,
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    datasets: [
      {
        label: "Habits Completed",
        // data: [sun, mon, tue, wed, thu, fri, sat],
        data: [0, 1, 1, 0, 0, 0],
        backgroundColor: [
          "rgba(247, 83, 118, 0.952)",
          "rgba(54, 163, 235, 0.76)",
          "rgba(241, 194, 75, 0.877)",
          "rgba(75, 192, 192, 0.918)",
          "rgba(153, 102, 255, 0.692)",
          "rgba(255, 160, 64, 0.822)",
          "rgb(59, 61, 201)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const dispatch = useDispatch();

  const [reload, setReaload] = useState(false);
  useEffect(() => {
    setReaload(false);
    getCount();

    // console.log("render Dashboard");
  }, [reload, select]);

  // All Functions

  function getCount() {
    // setData({
    //   ...datas,
    //   datasets: [...datas.datasets, (datas.datasets[0].data = chartValue)],
    // });

    setData({
      ...datas,
      datasets: [{ ...datas.datasets[0], data: chartValue }],
    });
    // console.log("Ajju", (datas.datasets[0].data = [1, 1, 1, 1, 1]));
    // console.log(datas);
    select.map((item) => {
      if (item.days.sun === true) {
        chartValue[0]++;
      }
      if (item.days.mon === true) {
        chartValue[1]++;
      }
      if (item.days.tue === true) {
        chartValue[2]++;
      }
      if (item.days.wed === true) {
        chartValue[3]++;
      }
      if (item.days.thu === true) {
        chartValue[4]++;
      }
      if (item.days.fri === true) {
        chartValue[5]++;
      }
      if (item.days.sat === true) {
        chartValue[6]++;
      }
    });
  }

  const doneForNow = (ind) => {
    setReaload(true);
    notify.success("Mark as Done");
    dispatch(TodayDone(day, ind));
  };

  const unDone = (ind) => {
    setReaload(true);
    notify.warning("Mark as UnDone");
    dispatch(TodayUnDone(day, ind));
  };
  return (
    <>
      <h1 className="dash-heading">Dashboard</h1>
      <div className="Dashboard-container">
        <div className="Charts">
          <Doughnut data={datas} />
          <h2 className="pie-chart-title">Pie Chart </h2>
        </div>
        <div>
          {/* {console.log("after: ", datas)} */}
          {select.map((item, ind) => {
            return (
              <div className="Dashboard-habits-list" key={ind + 1}>
                {/* {console.log(item.days)} */}
                {day === 0 ? (
                  item.days.sun === true ? (
                    <div className="habits-day-div">
                      <li className="Dashboard-habits-title-done">
                        {item.title}
                      </li>
                      <button onClick={() => unDone(ind)}>Undo</button>
                    </div>
                  ) : (
                    <div className="habits-day-div">
                      <li className="">{item.title}</li>
                      <button onClick={() => doneForNow(ind)}>Done</button>
                    </div>
                  )
                ) : day === 1 ? (
                  item.days.mon === true ? (
                    <div className="habits-day-div">
                      <li className="Dashboard-habits-title-done">
                        {item.title}
                      </li>
                      <button onClick={() => unDone(ind)}>Undo</button>
                    </div>
                  ) : (
                    <div className="habits-day-div">
                      <li className="">{item.title}</li>
                      <button onClick={() => doneForNow(ind)}>Done</button>
                    </div>
                  )
                ) : day === 2 ? (
                  item.days.tue === true ? (
                    <div className="habits-day-div">
                      <li className="Dashboard-habits-title-done">
                        {item.title}
                      </li>
                      <button onClick={() => unDone(ind)}>Undo</button>
                    </div>
                  ) : (
                    <div className="habits-day-div">
                      <li className="">{item.title}</li>
                      <button onClick={() => doneForNow(ind)}>Done</button>
                    </div>
                  )
                ) : day === 3 ? (
                  item.days.wed === true ? (
                    <div className="habits-day-div">
                      <li className="Dashboard-habits-title-done">
                        {item.title}
                      </li>
                      <button onClick={() => unDone(ind)}>Undo</button>
                    </div>
                  ) : (
                    <div className="habits-day-div">
                      <li className="">{item.title}</li>
                      <button onClick={() => doneForNow(ind)}>Done</button>
                    </div>
                  )
                ) : day === 4 ? (
                  item.days.thu === true ? (
                    <div className="habits-day-div">
                      <li className="Dashboard-habits-title-done">
                        {item.title}
                      </li>
                      <button onClick={() => unDone(ind)}>Undo</button>
                    </div>
                  ) : (
                    <div className="habits-day-div">
                      <li className="">{item.title}</li>
                      <button onClick={() => doneForNow(ind)}>Done</button>
                    </div>
                  )
                ) : day === 5 ? (
                  item.days.fri === true ? (
                    <div className="habits-day-div">
                      <li className="Dashboard-habits-title-done">
                        {item.title}
                      </li>
                      <button onClick={() => unDone(ind)}>Undo</button>
                    </div>
                  ) : (
                    <div className="habits-day-div">
                      <li className="">{item.title}</li>
                      <button onClick={() => doneForNow(ind)}>Done</button>
                    </div>
                  )
                ) : item.days.sat === true ? (
                  <div className="habits-day-div">
                    <li className="Dashboard-habits-title-done">
                      {item.title}
                    </li>
                    <button onClick={() => unDone(ind)}>Undo</button>
                  </div>
                ) : (
                  <div className="habits-day-div">
                    <li className="">{item.title}</li>
                    <button onClick={() => doneForNow(ind)}>Done</button>
                  </div>
                )}

                {/* <li>{item.description}</li> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
