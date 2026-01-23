import React from "react";
import {useState} from "react";


function Form({ setItems, items, setShowForm, showForm}) {
    console.log(items)

    const [formData, setFormData] = useState({
        title: "",
        category: "",
        location: "",
        notes: "this is a note",
        completed: true,
        time: "",
        day: "",
        duration: ""


    })

    function handleAllChange(e) {
        let target = e.target 
        let name = e.target.name
        
        if (target === "checked") {
            let value = e.target.checked
           setFormData({...formData, [name]: value})
        } else {
            let value = e.target.value
           setFormData({...formData, [name]: value})
         }

    }

    

    function handleSubmit(e) {
        console.log(e.target.remove)
        e.preventDefault()
        e.target.remove()
        setShowForm(!showForm)
        console.log(e.target)
        fetch("http://localhost:3000/items", {
            method: "POST",
            headers: {
             "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)

        })
        .then((response) => {
            if (response.ok) {
           return response.json()
            }
           throw new Error("Could not complete request")
        })
        .then((json) => {
            console.log(json)
            setItems([...items, json])
        })
        .catch((error) => {
            console.error(error)
            alert("Request Failed, Try again")
        })


    }


    return (
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Category:</label><br></br>
                <select name="category" value={formData.category} onChange={(e) => handleAllChange(e)}>
                <option name="all" value="all">All</option>
                <option name="appointment" value="appointment">Appointment</option>
                <option name="workout" value="workout">Workout</option>
                <option name="meal" value="meal">Meal</option>
                <option name="event" value="event">Event</option>
                <option name="meeting" value="meeting">Meeting</option>
                <option name="errand" value="errand">Errand</option>
                <option name="task" value="task">Task</option>
                </select><br></br>
                <label>Title:</label><br></br>
                <input onChange={(e) => handleAllChange(e)} type="text" name="title" value={formData.title}></input><br></br>
                <label>Time:</label><br></br>
                <input onChange={(e) => handleAllChange(e)} type="time" id="time" name="time" value={formData.time} required></input><br></br>
                <label>Day:</label><br></br>
                <input onChange={(e) => handleAllChange(e)} type="text" id="day" name="day"  value={formData.day} ></input><br></br>
               <label>Completed:</label><br></br>
                <input onChange={(e) => handleAllChange(e)} type="checkbox" name="completed" checked={formData.completed}></input><br></br>
                <label>Location:</label><br></br>
                <input onChange={(e) => handleAllChange(e)} type="text" name="location" value={formData.location}></input><br></br>
                <label>Notes:</label><br></br>
                <input onChange={(e) => handleAllChange(e)} type="text" name="notes" value={formData.notes}></input><br></br>
                <label>Duration:</label><br></br>
                <input onChange={(e) => handleAllChange(e)} type="text" name="duration" value={formData.duration}></input><br></br> 
                <input type="submit" value="submit"></input>
            </form>

        </div>
    )
}

export default Form