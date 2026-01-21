import React from "react";
import { useState } from "react";


function Item({item}) {
console.log(item)
const [toggle, setToggle] = useState(false)


function handleClick(e) {
    e.stopPropagation();
    setToggle(!toggle)

}


let color 
switch (item.category) {
    case "appointment":
        color = "teal";
        break
        case "workout":
            color = "blue"
            break
            case "meal":
            color = "purple"
            break
            case "event":
            color = "orange"
            break
            case "meeting":
            color = "yellow"
            break
            default:
                color = "pink"
}


    return (
        <div onClick={(e) => handleClick(e)} style={{backgroundColor: `${color}`}} className="item">
            <p>{item.title}</p>
            {toggle ? (
   
       <div className="moreinfo">
        <label className="label">Location:</label>
       <p>{item.location}</p>
       <label className="label">Notes:</label>
       <p>{item.notes}</p>
       <label className="label">Date:</label>
       <p>{item.date}</p>
       <label className="label">Time:</label>
       <p>{item.time}</p>
       </div>
    
       ) : null}

        </div>
    )
}

export default Item