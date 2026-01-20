import logo from './logo.svg';
import './App.css';
import Nav from "./Nav";
import Calendar from "./Calendar";
import Day from "./Day";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <h1>Orderly</h1>
         <Calendar>
          

         </Calendar>
         <Day></Day>
      
    </div>
  );
}

export default App;
