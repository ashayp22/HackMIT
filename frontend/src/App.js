import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import HomeScreen from './components/HomeScreen.js';
import InstructionScreen from './components/InstructionScreen.js';
import GameScreen from './components/GameScreen.js';
import ResearchScreen from './components/ResearchScreen.js';
import RestartScreen from './components/RestartScreen.js';
import VisualScreen from './components/VisualScreen.js';
import Particles from 'react-particles-js';
import "./index.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class App extends React.Component{

  state = {
    gameState: 0
  }


  changeGameState = (i) => {
    alert(i);
    this.setState({gameState: i});
  }

  handleGameState() {
    switch(this.state.gameState){
      case 0:
        return (<HomeScreen onClick = {this.changeGameState}></HomeScreen>);
      case 1:
        return (<InstructionScreen></InstructionScreen>);
      case 2:
        return (<GameScreen></GameScreen>);
      case 3:
        return(<VisualScreen></VisualScreen>);
      case 4:
        return(<ResearchScreen></ResearchScreen>);
      case 5:
        return(<RestartScreen></RestartScreen>);
    }
  }


  render() {

    let divStyle = {
      textAlign: 'center',
    }

    let particleStyle = {
      zIndex: "-1"
    }


      return (


        <Router>
      <div className = "app"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%"
        }}
      >
        
        <Particles style = {particleStyle}
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#3AA5B0"
                                    },
                        "number": {
                            "value": 150
                        },
                        "size": {
                            "value": 5
                        }
                    },
                    "interactivity": {
                        "events": {
                            "onhover": {
                                "enable": true,
                                "mode": "repulse"
                            }
                        }
                    }
                }}
                style={{
                        width: '100vw',
                        background: `#96D0F1` 
                 }}
                />

            {this.handleGameState()} 

      </div>
    </Router>

      );
  }
}