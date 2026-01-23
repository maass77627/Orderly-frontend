import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "./Form";

function OptionModal({ handleClose, show, items, setItems}) {
    console.log(items)
    const [showForm, setShowForm] = useState(false)
   
    const [selectedCat, setSelectedCat] = useState("")

    let categories = ["Appointment", "Meal", "Event", "Meeting", "Workout", "Errand"]

function handleClick(cat, e) {
    console.log(e.target.parentNode)
    let div = e.target.parentNode
    div.classList.add("hidden")

    console.log(e.target.value)
    console.log(cat)
    setSelectedCat(cat)
    setShowForm(!showForm)

}

    return (
         <>
      

      <Modal size="md" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Add an Event</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            <div className="catbuttons" >
            {!selectedCat && categories.map((cat) =>  <button onClick={(e, cat) => handleClick(cat, e)} key={cat} className="nav-button">{cat}</button>)}</div>
           
        {showForm && <Form showForm={showForm} setShowForm={setShowForm} items={items} setItems={setItems}></Form>}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </>


    )
}

export default OptionModal