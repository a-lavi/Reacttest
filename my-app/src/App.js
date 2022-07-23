import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from "react";
import {Route, Routes } from "react-router-dom";
import  NewsList from "./NewsList.js"
import Header from "./Header.js"
import Footer from "./Footer.js"


function App() {
  

  return(
    
  <div className="App">
    <Header/>
    <div>ssss</div>
    <h1>hi Ali</h1>  
  <Routes>
    <Route path="/users/:username" element={<Users/>} />
    <Route path="/" element={<NewsList/>}/>
    <Route path="/items/:id" element={<Items/>} />
    <Route path="/search" element={<Search/>} />
  </Routes>
  <Footer/>
  </div>
  )
}
        
            

export default App;
