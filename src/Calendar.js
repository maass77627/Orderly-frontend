import React from "react";
import Day from "./Day";


function Calendar({handleClose, handleShow, items, setItems}) {
    console.log(items)
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]




    return (
        <div className="calendar">
            <h1 className="cal-title">My Week</h1>
            {daysOfTheWeek.map((day) => <Day day={day} items={items} handleClose={handleClose} handleShow={handleShow} key={day} setItems={setItems} ></Day>)}
        </div>
    )
}

export default Calendar