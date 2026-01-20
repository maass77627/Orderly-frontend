
import './App.css';
import Nav from "./Nav";
import Calendar from "./Calendar";
import Footer from "./Footer";
// import Day from "./Day";
import OptionModal from './OptionModal';
import {useState, useEffect } from "react";
import { Routes, Route} from "react-router-dom";
import About from "./About";

function App() {
  const [items, setItems] = useState([])

useEffect(() => {
  fetch("http://localhost:3000/items")
  .then((response) => response.json())
  .then((json) => {
    console.log(json)
    setItems(json)
  })
}, [])

 const [show, setShow] = useState(false);
//  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  function handleClose() {
    setShow(false)
  }

  function handleShow() {
    setShow(true)
  }





  return (
    <div className="App">
      <Nav items={items}></Nav>
     
         <Routes>
         <Route exact path="/" element={<About></About>}/>
         <Route exact path="/calendar" element={<Calendar handleClose={handleClose} handleShow={handleShow}></Calendar>}/>
        
         
        </Routes>
        <OptionModal show={show} handleShow={handleShow} handleClose={handleClose}></OptionModal>
        
      <Footer></Footer>
    </div>
  );
}

export default App;
