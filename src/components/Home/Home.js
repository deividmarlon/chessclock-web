import React from 'react';
import {Link} from "react-router-dom";


import Toolbar from '../Toolbar/Toolbar'
import './home.css';
import logo from '../../logo.svg';

const Home = props => {
  return (
    <>
    <Toolbar/>
    <div className="HomePage">
      <main>
          <Link to="/clock">
            <button >Customize</button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:1,s:0,a:0},{m:1,s:0,a:0}) }> 1 + 0 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:2,s:0,a:1},{m:2,s:0,a:1}) }> 2 + 1 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:3,s:0,a:0},{m:3,s:0,a:0}) }> 3 + 0 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:3,s:0,a:2},{m:3,s:0,a:2}) }> 3 + 2 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:5,s:0,a:0},{m:5,s:0,a:0}) }> 5 + 0 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:5,s:0,a:3},{m:5,s:0,a:3}) }> 5 + 3 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:10,s:0,a:0},{m:10,s:0,a:0}) }> 10 + 0 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:10,s:0,a:5},{m:10,s:0,a:5}) }> 10 + 5 </button>
          </Link>
          <Link to="/clock">
            <button onClick={()=>props.config({m:15,s:0,a:10},{m:15,s:0,a:10}) }> 15 + 10 </button>
          </Link>
      </main>
    </div>
    </>
  );
}

export default Home;
