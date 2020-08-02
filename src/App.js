import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

import Home from './components/Home/Home'
import Clock from './components/Clock/Clock'

function App() {

  const [initialTimers,setInitialTimers]= useState({timerOne:{m:0,s:0,a:0},timerTwo:{m:0,s:0,a:0}});

  const [timerOne, setTimerOne]= useState({m:0,s:0});
  const [timerTwo, setTimerTwo]= useState({m:0,s:0});

  const [intervOne, setIntervOne]= useState();
  const [intervTwo, setIntervTwo]= useState();

  const [disableStatusOne, setDisableStatusOne]= useState(true);
  const [disableStatusTwo, setDisableStatusTwo]= useState(true);

  const [menuButtons, setMenuButtons]= useState('');
  const [pauseButton, setPauseButton]= useState('Hide');

  const [timerOneStyle, setTimerOneStyle]= useState('Timer Timer_Reverse Timer_Disabled');
  const [timerTwoStyle, setTimerTwoStyle]= useState('Timer Timer_Disabled');

  
  const config = (timerOne,timerTwo) =>{
    setTimerOne(timerOne);
    setTimerTwo(timerTwo);
    setInitialTimers({timerOne:timerOne,timerTwo:timerTwo});
  }

  const startOne = () =>{
    setTimerOneStyle('Timer Timer_Reverse Timer_Running');
    setDisableStatusOne(false);
    runTimerOne();
    setIntervOne(setInterval(runTimerOne,1000));
  }

  const startTwo = () =>{
    setTimerTwoStyle('Timer Timer_Running');
    setDisableStatusTwo(false);
    runTimerTwo();
    setIntervTwo(setInterval(runTimerTwo,1000));
  }

  const stopOne = () =>{
    setTimerOneStyle('Timer Timer_Reverse Timer_Disabled');
    setDisableStatusOne(true);
    clearInterval(intervOne);
  }

  const stopTwo = () =>{
    setTimerTwoStyle('Timer Timer_Disabled');
    setDisableStatusTwo(true);
    clearInterval(intervTwo);
  }

  const reset = (initialClockOne,initialClockTwo) =>{
    setTimerOne(initialClockOne);
    setTimerTwo(initialClockTwo);
  }

  const addSeconds_TimerOne = (seconds) =>{
    if(disableStatusOne || disableStatusTwo){
      if(timerOne.s+seconds >=60){
        setTimerOne({m:timerOne.m+1,s: 0-(60 - (timerOne.s+seconds))})
      }else{
        setTimerOne({m:timerOne.m, s:timerOne.s+seconds})
      }
    }
  }

  const addSeconds_TimerTwo = (seconds) =>{
    if(disableStatusOne || disableStatusTwo){
      if(timerTwo.s+seconds >=60){
        setTimerTwo({m:timerTwo.m+1,s: 0-(60 - (timerTwo.s+seconds))})
      }else{
        setTimerTwo({m:timerTwo.m, s:timerTwo.s+seconds})
      }
    }
  }

  var timerOne_updatedM = timerOne.m, timerOne_updatedS = timerOne.s;
  var timerTwo_updatedM = timerTwo.m, timerTwo_updatedS = timerTwo.s;
  
  const runTimerOne = () =>{
    if(timerOne_updatedS===0){
      timerOne_updatedM--;
      timerOne_updatedS=60;
    }
    timerOne_updatedS--;
    return (setTimerOne({s:timerOne_updatedS,m:timerOne_updatedM}))
  }

  const runTimerTwo = () =>{
    if(timerTwo_updatedS===0){
      timerTwo_updatedM--;
      timerTwo_updatedS=60;
    }
    timerTwo_updatedS--;
    return (setTimerTwo({s:timerTwo_updatedS,m:timerTwo_updatedM}))
  }

  const play = () =>{
    setDisableStatusOne(false);
    setDisableStatusTwo(false);
    setTimerOneStyle('Timer Timer_Reverse');
    setTimerTwoStyle('Timer');
    setMenuButtons('Hide');
    setPauseButton('');
  }

  const pause = () =>{
    setDisableStatusOne(true);
    setDisableStatusTwo(true);
    setTimerOneStyle('Timer Timer_Reverse Timer_Disabled');
    setTimerTwoStyle('Timer Timer_Disabled');
    stopOne();
    stopTwo();
    setMenuButtons('');
    setPauseButton('Hide');
  }

  return (
    <Router>
      <div style={{height: '100%'}}>
        <Route path="/" exact component={()=>
            <Home
              config={config}
            />
        }/>
        <Route path="/clock" component={()=>
            <Clock 
              initialClocks={initialTimers}
              clockOne={timerOne} 
              clockTwo={timerTwo} 
              timerOneStyle={timerOneStyle}
              timerTwoStyle={timerTwoStyle}
              disableStatusOne={disableStatusOne}
              disableStatusTwo={disableStatusTwo}
              startOne={startOne} 
              startTwo={startTwo} 
              stopOne={stopOne}
              stopTwo={stopTwo}
              addSeconds_TimerOne={addSeconds_TimerOne}
              addSeconds_TimerTwo={addSeconds_TimerTwo}
              reset={reset}
              play={play} 
              pause={pause} 
              menuButtons={menuButtons}
              pauseButton={pauseButton}
            />}
        />
      </div>
    </Router>
  );
}

export default App;
