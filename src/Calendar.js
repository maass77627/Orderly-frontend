import React from "react";
import Day from "./Day";


function Calendar({handleClose, handleShow, items, getEventDay}) {
    console.log(items)
    const daysOfTheWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

   function getItemsForDay(day) {
    console.log(day)
    // debugger
    return items.filter(item => getEventDay(item.date) === day);
    
  }



    return (
        <div className="calendar">
            <h1 className="cal-title">Calendar</h1>
            {daysOfTheWeek.map((day) => <Day day={day} items={getItemsForDay(day)} handleClose={handleClose} handleShow={handleShow} key={day} ></Day>)}
            
        </div>
    )
}

export default Calendar