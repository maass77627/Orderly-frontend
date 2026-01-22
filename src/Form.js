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

    function handleTitleChange(value) {
        setFormData({...formData, title: value})

    }
    function handleLocationChange(value) {
        setFormData({...formData, location: value})

    }
    function handleNotesChange(value) {
        setFormData({...formData, notes: value})

    }
    function handleCompletedChange(value) {
        setFormData({...formData, completed: value})

    }
    function handleTimeChange(value) {
        setFormData({...formData, time: value})

    }
    function handleDayChange(value) {
        setFormData({...formData, day: value})

    }
    function handleDurationChange(value) {
        setFormData({...formData, duration: value})

    }
    function handleCategoryChange(value) {
        setFormData({...formData, category: value})

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
        .then((response) => response.json())
        .then((json) => {
            console.log(json)
            setItems([...items, json])
        })


    }


    return (
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <label>Category:</label><br></br>
                <select value={formData.category} onChange={(e) => handleCategoryChange(e.target.value)}>
                <option value="all">All</option>
                <option value="appointment">Appointment</option>
                <option value="workout">Workout</option>
                <option value="meal">Meal</option>
                <option value="event">Event</option>
                <option value="meeting">Meeting</option>
                </select>
                <label>Title:</label><br></br>
                <input onChange={(e) => handleTitleChange(e.target.value)} type="text" name="title" value={formData.title}></input><br></br>
                <label>Time:</label><br></br>
                <input onChange={(e) => handleTimeChange(e.target.value)} type="time" id="time" name="time" value={formData.time} required></input><br></br>
                <label>Day:</label><br></br>
                <input onChange={(e) => handleDayChange(e.target.value)} type="text" id="day" name="day"  value={formData.day} ></input><br></br>
               <label>Completed:</label><br></br>
                <input onChange={(e) => handleCompletedChange(e.target.checked)} type="checkbox" name="completed" checked={formData.completed}></input><br></br>
                <label>Location:</label><br></br>
                <input onChange={(e) => handleLocationChange(e.target.value)} type="text" name="location" value={formData.location}></input><br></br>
                <label>Notes:</label><br></br>
                <input onChange={(e) => handleNotesChange(e.target.value)} type="text" name="notes" value={formData.notes}></input><br></br>
                <label>Duration:</label><br></br>
                <input onChange={(e) => handleDurationChange(e.target.value)} type="text" name="duration" value={formData.duration}></input><br></br> 
                <input type="submit" value="submit"></input>
            </form>

        </div>
    )
}

export default Form