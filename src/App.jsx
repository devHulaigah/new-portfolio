import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar"
import Aboutme from "./components/about"

function App() {
  return (
    <>
     <Navbar></Navbar>
     <Aboutme></Aboutme>
     
    </>
  );
}

export default App;
