import { Route, Routes } from "react-router-dom"
import './App.css';
import '../src/component/Navbar'
import Navbar from '../src/component/Navbar';
import Homepage from './component/Homepage';

function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Homepage/>}/>
      <Route path="/Navbar" element={<Navbar/>}/>
      
    </Routes>
  ) 
} 


export default App;
