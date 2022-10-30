import {BrowserRouter,  Route, Routes } from "react-router-dom"
import './App.css';
import '../src/component/Navbar'
import Navbar from '../src/component/Navbar';
import Finance from "./component/Services/Finance ";
import Form from "./component/Form";
import Homepage from "./component/Homepage";
import ConfirmBooking from "./component/ConfirmBooking";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/Finance" element={<Finance />} />
      <Route path="/Form" element={<Form />} />
      <Route path="/ConfirmBooking" element={< ConfirmBooking/>} />
    </Routes>
  </BrowserRouter>
  ) 
} 


export default App;
