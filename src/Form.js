import React from "react";
import {useState} from "react";


function Form({ setItems, items}) {
    console.log(items)

    const [formData, setFormData] = useState({
        title: "winner",
        location: "austin",
        notes: "this is a note",
        completed: true,
        time: "",
        date: "",
        duration: "fejf"


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
    function handleDateChange(value) {
        setFormData({...formData, date: value})

    }
    function handleDurationChange(value) {
        setFormData({...formData, duration: value})

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)
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
                <input onChange={(e) => handleTitleChange(e.target.value)} type="text" name="title" value={formData.title}></input><br></br>
                <input onChange={(e) => handleTimeChange(e.target.value)} type="time" id="time" name="time" value={formData.time} required></input><br></br>
                <input onChange={(e) => handleDateChange(e.target.value)} type="date" id="date" name="date" min="1900-01-01" max="2100-12-31" value={formData.date} required></input><br></br>
               <label>Completed:</label>
                <input onChange={(e) => handleCompletedChange(e.target.checked)} type="radio" name="completed" checked={formData.completed}></input><br></br>
                <input onChange={(e) => handleLocationChange(e.target.value)} type="text" name="location" value={formData.location}></input><br></br>
                <input onChange={(e) => handleNotesChange(e.target.value)} type="text" name="notes" value={formData.notes}></input><br></br>
                <input onChange={(e) => handleDurationChange(e.target.value)} type="text" name="duration" value={formData.duration}></input><br></br> 

                <input type="submit" value="submit"></input>
            </form>

        </div>
    )
}

export default Form