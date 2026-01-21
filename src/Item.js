import React from "react";
import { useState } from "react";


function Item({item, items, setItems}) {
console.log(item)
const [toggle, setToggle] = useState(false)


function handleClick(e) {
    e.stopPropagation();
    setToggle(!toggle)

}

// function handleDelete(id) {
//     fetch(`http://localhost:3000/items/${id}`, {
//         method: "DELETE"
    
//     })
//     let newItems = items.filter((item) => item.id !== id)
//     setItems(newItems)

// }

function handleDelete(id) {
  console.log("Deleting id:", id);

  fetch(`http://localhost:3000/items/${id}`, {
    method: "DELETE"
  })
  .then(() => {
    setItems(items => items.filter(item => item.id !== id));
  })
  .catch(err => console.error("DELETE failed:", err));
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
            <button onClick={() => handleDelete(item.id)} className="delete">x</button>
            <p>{item.title}</p>
            {toggle ? (
   
       <div className="moreinfo">
        <label className="label">Location:</label>
       <p>{item.location}</p>
       <label className="label">Notes:</label>
       <p>{item.notes}</p>
       {/* <label className="label">Date:</label>
       <p>{item.date}</p> */}
       <label className="label">Time:</label>
       <p>{item.time}</p>
       </div>
    
       ) : null}

        </div>
    )
}

export default Item