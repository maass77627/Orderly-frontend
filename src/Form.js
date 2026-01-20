import React from "react";
import {useState} from "react";


function Form() {

    const [formData, setFormData] = useState({
        title: "winner",
        location: "austin",
        notes: "this is a note",
        completed: true,
        time: "",
        date: ""

    })

    function handleTitleChange(value) {
        setFormData({...formData, title: value})

    }

    function handleSubmit(e) {
        e.preventDefault()
        console.log(e)


    }


    return (
        <div className="form">
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => handleTitleChange(e.target.value)} type="text" name="title" value={formData.title}></input><br></br>
                <input type="time" id="time" name="time" required></input><br></br>
                    <input type="date" id="date" name="date" min="1900-01-01" max="2100-12-31" required></input><br></br>

                <input type="submit" value="submit"></input>
            </form>

        </div>
    )
}

export default Form