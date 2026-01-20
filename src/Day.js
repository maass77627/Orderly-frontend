import React from "react";

function Day({day}) {

    return (
        <div className="day">
            <h1>{day}</h1>
           <i class="fa-solid fa-dumbbell"></i>
           <i class="fa-solid fa-bowl-food"></i>
           <i class="fa-solid fa-cake-candles"></i>
        </div>
    )
}

export default Day