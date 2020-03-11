import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from "./components/nav"
import Home from "./components/home"
import Breakfast from "./components/breakfast"
import {Link, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Nav />
      <div className="title">
        <img src="http://www.acapulcodeliandrestaurant.com/img/Header.gif" className="aca" />
        {/* <img src="https://d37219swed47g7.cloudfront.net/media/reviews/acapulco-deli/banners/Acapulco-Deli_0.jpg" className="mainphoto" /> */}
       
        </div>
      <Home />
      <Breakfast />
    </div>
  );
}

export default App;
