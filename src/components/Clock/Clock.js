import React, {useState} from 'react';
import {Link} from "react-router-dom";

import './clock.css';
import logo from '../../logo.svg';

const Clock = props => {

  if((props.clockOne.m ===0 && props.clockOne.s ===0) || (props.clockTwo.m===0 && props.clockTwo.s===0)){
    props.disableStatusOne = true;
    props.disableStatusTwo = true;
  }

  return (
    <>
    <div className={"ClockPage"}> 
      <main>
          <button className={props.timerOneStyle} disabled={props.disableStatusOne} 
            onClick={()=>{
              props.stopOne();
              props.addSeconds_TimerOne(props.initialClocks.timerOne.a);
              props.startTwo();
            }}>
              {`${(props.clockOne.m>=10)?props.clockOne.m : "0" + props.clockOne.m}:${(props.clockOne.s>=10)?props.clockOne.s : "0" + props.clockOne.s}`}
          </button>
          <div className="Menu">
          <Link to="/">
          <button id="btnBack" className={props.menuButtons}> BACK </button>
          </Link>
          <button id="btnPlay" className={props.menuButtons} onClick={()=>{props.play()}}> PLAY </button>
          <button id="btnReset" className={props.menuButtons} onClick={() =>{props.reset(props.initialClocks.timerOne,props.initialClocks.timerTwo)}}> RESET </button>
          <button id="btnPause" className={props.pauseButton} onClick={()=>{props.pause();}}> PAUSE </button>
          </div>

          <button className={props.timerTwoStyle} disabled={props.disableStatusTwo} 
            onClick={()=>{
              props.stopTwo();
              props.addSeconds_TimerTwo(props.initialClocks.timerTwo.a);
              props.startOne();
            }}>
              {`${(props.clockTwo.m>=10)?props.clockTwo.m : "0" + props.clockTwo.m}:${(props.clockTwo.s>=10)?props.clockTwo.s : "0" + props.clockTwo.s}`}
          </button>
      </main>
    </div>

    <div className={"Modal"}>
    
    </div>
    </>
  );
}

export default Clock;
