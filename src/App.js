import logo from "./logo.svg";
import "./App.css";
import { React, useEffect, useState } from "react";
// import Alert from 'react-bootstrap/Alert';
import Header from "./components/layout/navbar";
import Home from "./components/home";

function App() {

  const [dark, updateDark] = useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  useEffect(()=>{
    if(ModeDark){
      updateDark(ModeDark)
    }
  },[ModeDark])


  return (
    <div className="App">
     <Header dark={dark} updateDark={updateDark} />

     <Home dark={dark} updateDark={updateDark} />
    </div>
  );
}

export default App;
