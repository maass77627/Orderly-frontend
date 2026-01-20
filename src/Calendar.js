import React from "react";
import Day from "./Day";


function Calendar() {
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

    return (
        <div className="calendar">
            <h1>Calendar</h1>
            {daysOfTheWeek.map((day) => (<Day day={day}></Day>))}

        </div>
    )
}

export default Calendar