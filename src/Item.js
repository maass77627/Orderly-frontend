import React from "react";
import { useState } from "react";


function Item({item, items, setItems}) {
console.log(item)
const [toggle, setToggle] = useState(false)


function handleClick(e) {
    e.stopPropagation();
    setToggle(!toggle)

}

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
   
    fetch(`http://localhost:3000/items/${id}`, {
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
    e.stopPropagation()
  console.log("Deleting id:", id);

  fetch(`http://localhost:3000/items/${id}`, {
    method: "DELETE"
  })
  .then((response) => {
    if (response.ok) {
       let newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    }
    throw new Error("Could not delete item")
  })
  .catch((error) => {
    console.error(error)
    alert("could not complete delete request, please try again")
  })
  
  
    // let newItems = items.filter((item) => item.id !== id)
    // setItems(newItems)
  

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


    return (
        <div onClick={(e) => handleClick(e)} style={{backgroundColor: `${color}`}} className="item">
            <i onClick={(e) => handleIconChange(e, item)} style={{color: item.completed ? "green" : "red"}}  class="fa-solid fa-check"></i>
           
            <button onClick={(e) => handleDelete(e, item.id)} className="delete">x</button>
           <strong><p>{item.title}</p></strong>
            
            {toggle ? (
   
       <div className="moreinfo">
        <label className="label">Location:</label>
       <p>{item.location}</p>
       <label className="label">Notes:</label>
       <p>{item.notes}</p>
       <label className="label">Time:</label>
       <p>{item.time}</p>
       </div>
    
       ) : null}

        </div>
    )
}

export default Item