import React from "react";
import Day from "./Day";


function Calendar({handleClose, handleShow}) {
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    return (
        <div className="calendar">
            <h1 className="cal-title">Calendar</h1>
            {daysOfTheWeek.map((day) => (<Day handleClose={handleClose} handleShow={handleShow} key={day} day={day}></Day>))}

        </div>
    )
}

export default Calendar