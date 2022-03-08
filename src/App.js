import "../node_modules/bootstrap/dist/css/bootstrap.css";
//importing all required components 
import About from "./About";
import "./App.css";
import Home from "./Home";
import Navbar from "./Navbar";
import NotFound from "./NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "./AddUser";
import EditUser from "./EditUser";
import User from './User';

//app component to route to diffrent components or pages based on path 
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/about" element={<About />}></Route>
         <Route exact path="/adduser" element={<AddUser/>} ></Route>
        <Route exact path="/edituser/:index" element={<EditUser/>} ></Route>
        <Route exact path="/user/:id" element={<User/>} ></Route>
        <Route exact path="/about" element={<About/>} ></Route>
        <Route exact path="*" element={<NotFound />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
