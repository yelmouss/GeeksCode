import logo from "./logo.svg";
import "./App.css";
import { React, useEffect, useState } from "react";
// import Alert from 'react-bootstrap/Alert';
import Header from "./components/layout/navbar";
import Home from "./components/Home";
import Footer from "./components/layout/footer";
function App() {
  const [dark, updateDark] = useState(null);
  const ModeDark = JSON.parse(localStorage.getItem("dark"));

  useEffect(() => {
    if (ModeDark) {
      updateDark(ModeDark);
    }
  }, [ModeDark]);

  return (
    <>
      <div className={`App d-flex flex-column min-vh-100 ${dark ? "bg-light" : "bg-dark"}` }>
        <Header dark={dark} updateDark={updateDark} />
        <Home dark={dark} updateDark={updateDark} />      
        <Footer /> 
      </div>   
    </>
  );
}

export default App;
