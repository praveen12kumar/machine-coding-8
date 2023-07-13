import {Routes,Route} from "react-router-dom";
import Topbar from "./components/Topbar";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import './App.css';


function App() {
  return (
    <div className="App">
      <Topbar/>
      <Routes>
        <Route path="/" element={<Home /> }/>
        <Route path="/:cardId" element={<EventDetails /> }/>
      </Routes>
    </div>
  );
}

export default App;
