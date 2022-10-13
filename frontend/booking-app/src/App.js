
import './App.css';
import '../src/component/Navbar'
import Navbar from '../src/component/Navbar';
import Homepage from './component/Homepage';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homepage/>
    </div>
  );
}

export default App;
