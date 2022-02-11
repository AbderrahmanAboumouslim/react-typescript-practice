import React from "react";
import logo from "./logo.svg";
import "./App.css";
import FirstText from "./components/FirstText";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header isLoaded={true} color="pink" />
      <FirstText title="Hello EveryOne" color="green" />
    </div>
  );
}

export default App;
