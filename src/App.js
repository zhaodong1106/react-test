import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
        <nav>
            <Link  to={"/"}>Home</Link>
            <Link  to={"/about"}>About</Link>
            <Link  to={"/profile/3333"}>profile</Link>
        </nav>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/about"} element={<About/>}/>
            <Route path={"/profile/:profileId"} element={<Profile/>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
