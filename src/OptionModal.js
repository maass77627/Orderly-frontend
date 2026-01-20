import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "./Form";

function OptionModal({ handleClose, show, items}) {
    const [showForm, setShowForm] = useState(false)

function handleClick(item, e) {
    console.log(e)
    console.log(item)
    setShowForm(!showForm)

}

    return (
         <>
      

      <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>Add an Event</Modal.Title>
        </Modal.Header>
        <Modal.Body> 
            {items.map((item) => <button onClick={(e) => handleClick(item, e)} key={item.id} className="nav-button">{item.category}</button>)}
        {showForm && <Form></Form>}
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