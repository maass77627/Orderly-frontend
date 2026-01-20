import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Calendar from "./Calendar";
import Footer from "./Footer";
// import Day from "./Day";
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






  return (
    <div className="App">
      <Nav items={items}></Nav>
      {/* <h1>Orderly</h1> */}
         {/* <Calendar></Calendar> */}

         <Routes>
         <Route exact path="/" element={<About></About>}/>
         <Route exact path="/calendar" element={<Calendar></Calendar>}/>
         
        </Routes>
        
      <Footer></Footer>
    </div>
  );
}

export default App;
