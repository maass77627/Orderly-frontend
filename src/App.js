
import './App.css';
import Nav from "./Nav";
import Calendar from "./Calendar";
import Footer from "./Footer";
import OptionModal from './OptionModal';
import {useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import About from "./About";

function App() {
  const [items, setItems] = useState([])
  const [errorMessage, setErrorMessage] = useState(null)
  const [show, setShow] = useState(false);

useEffect(() => {
  fetch(`${process.env.REACT_APP_API_URL}/items`)
  .then((response) => {
    if (response.ok){
      return response.json()
    } else {
      throw new Error("the request failed")
    }})
  .then((json) => {
    setErrorMessage(null)
    setItems(json)
  })
  .catch((error) => {
    console.error(error)
    setErrorMessage("Events couldnt be loaded")
  })
}, [])

 

  function handleClose() {
    setShow(false)
  }

  function handleShow() {
    setShow(true)
  }

  if (errorMessage !== null){
    return (
      <div>
        <p>{errorMessage}</p>
      </div>
    )
  }



  return (
    <div className="App">
      <Nav setItems={setItems} items={items}></Nav>
     
         <Routes>
         <Route exact path="/" element={<About></About>}/>
         <Route exact path="/calendar" element={<Calendar setItems={setItems}  items={items} handleClose={handleClose} handleShow={handleShow}></Calendar>}/>
         </Routes>
        <OptionModal setItems={setItems} items={items} show={show} handleShow={handleShow} handleClose={handleClose}></OptionModal>
        
      <Footer></Footer>
    </div>
  );
}

export default App;
