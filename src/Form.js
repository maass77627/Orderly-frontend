import React from "react";
import {useState} from "react";


function Form() {

    const [formData, setFormData] = useState({
        title: "winner"
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
                <input onChange={(e) => handleTitleChange(e.target.value)} type="text" name="title" value={formData.title}></input>
               


                <input type="submit" value="submit"></input>
            </form>

        </div>
    )
}

export default Form