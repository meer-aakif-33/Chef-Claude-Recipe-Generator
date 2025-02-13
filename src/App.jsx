import React, { useState, useEffect } from "react";
import Main from "./components/IngredientMain"
import IngHeader from "./components/HeaderIngredientList"
import './index.css';

function App() {
  return (
    <>  
        
        <IngHeader/>
        <Main/>
    </>
  );
}

export default App;
