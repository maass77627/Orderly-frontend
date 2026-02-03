import React from "react";
// import { useState } from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import API_BASE_URL from "./Api";


function Item({item, items, setItems}) {
console.log(item)
// const [toggle, setToggle] = useState(false)

 const popover = (
    <Popover id="popover-basic">
      <Popover.Header as="h3">Details</Popover.Header>
      <Popover.Body>
         {/* <div className="moreinfo"> */}
        <label className="label">Location:</label>
       <p>{item.location}</p>
       <label className="label">Notes:</label>
       <p>{item.notes}</p>
       <label className="label">Time:</label>
       <p>{item.time}</p>
       {/* </div> */}
        
      </Popover.Body>
    </Popover>
  );



function handleIconChange(e, item) {
    e.stopPropagation()
    console.log(item.completed)
    let id = item.id
    let data
    if (item.completed === true){
        data = false
    } else {
        data = true
    }

    console.log(id)
    console.log(data)
   
    fetch(`${API_BASE_URL}/items/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        }, 
        body: JSON.stringify({completed: data})
    })
    .then((response) => {
        if (response.ok){
       return response.json()
        }
      throw new Error("Failed to update")
    })
    .then((json) => { 
        
       let newItems = items.map((item) => item.id === id ? {...item, completed: data} : item)
           console.log(newItems)
        setItems(newItems)
        console.log(json)
    
    })
    .catch((error) => {
        console.error(error)
        alert("The item could not be patched")
    })

}



function handleDelete(e, id) {
  e.stopPropagation();
  

  fetch(`${API_BASE_URL}/items/${id}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not delete item");
      }
      setItems((items) => items.filter((item) => item.id !== id));
    })
    .catch((error) => {
      console.error(error);
      alert("could not complete delete request, please try again");
    });
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
            case "errand":
            color = "pink"
            break
            default:
                color = "grey"
}

// onClick={(e) => handleClick(e)}
    return (
        <>
         <OverlayTrigger trigger={['hover', 'focus']} placement="right" overlay={popover} rootClose>
        <div  style={{backgroundColor: `${color}`}} className="item">
            <i onClick={(e) => handleIconChange(e, item)} style={{color: item.completed ? "green" : "red"}}  class="fa-solid fa-check"></i>
           
            
           <strong><p>{item.title}</p></strong>
           <button onClick={(e) => handleDelete(e, item.id)} className="delete">x</button>

        </div>
        </OverlayTrigger>
        </>
    )
}

export default Item