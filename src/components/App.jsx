import React, {useState}  from "react";
import TopBar             from "./topBar";
import ContentPane        from "./contentPane"
import '../css/App.css';

function App() {

  return (
    <div className="App container-fluid p-0">
      <TopBar/>
      <ContentPane/>
    </div>
  );
}

export default App;
