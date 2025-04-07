import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar";
import Aboutme from "./components/about";
import Project from "./components/projects";
import Lang from "./components/Lang.jsx";
import learnIcon from "../public/learn.svg";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Aboutme></Aboutme>
      <Project></Project>
      <hr className="mt-3 border-white"></hr>
      <div className=" p-5 text-white  font-bold flex  justify-center items-center gap-2">
        Languages I Learnt{" "}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="orange"
          className="bi bi-journal-check"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M10.854 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 8.793l2.646-2.647a.5.5 0 0 1 .708 0"
          />
          <path d="M3 0h10a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-1h1v1a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v1H1V2a2 2 0 0 1 2-2" />
          <path d="M1 5v-.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V8h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0v.5h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1z" />
        </svg>
      </div>
      <Lang></Lang>
    </>
  );
}

export default App;
