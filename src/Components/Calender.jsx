import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calender = () => {
  //  use hook for defining date for Calender
  const [date, setDate] = useState(new Date());
  function onChange(calDate) {
    // change results based on calendar date click
    setDate(calDate);
  }
  return (
    <>
      {/* THis is Calender div */}
      <div className="calender-container">
        <Calendar onChange={onChange} value={date} selectRange={true} />
        {/* {console.log(date)} */}
        {date.length > 0 ? (
          <p className="text-center">
            <span className="bold">Start: {date[0].toDateString()}</span>
            &nbsp;|&nbsp;
            <span className="bold">End: {date[1].toDateString()}</span>
          </p>
        ) : (
          <p className="text-center">
            <span> Default selected date:</span> &nbsp;&nbsp;
            <span className="bold">{date.toDateString()}</span>
          </p>
        )}
      </div>
    </>
  );
};

export default Calender;
