import React from "react";

function Item({item}) {
console.log(item)
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
            default:
                color = "gray"
}

    return (
        <div style={{backgroundColor: `${color}`}} className="item">
            <p>{item.title}</p>
            {/* <p>{item.location}</p>
            <p>{item.notes}</p>
            <p>{item.date}</p>
            <p>{item.time}</p> */}

        </div>
    )
}

export default Item