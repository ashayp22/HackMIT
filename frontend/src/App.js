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
      gameState: 0,
      stockDataObj: null,
      userLost: false,
      url: "https://reqres.in/api/products/3",
    }

  inits(){
    let url = this.state.url;
      if(this.state.stockDataObj == null){
        fetch(url, {header: {"access-control-allow-origin" : "*"}})
          .then((response) => {
            return response.json();
          })
          .then((json) => {
            console.log(json);
            this.setState({stockDataObj: json});
          });
      }
  }
  changeGameState = (i) => {
    this.setState({gameState: i});
  }

  hasUserLost = () => {
    if(this.state.userLost){
        this.changeGameState(5);
    }
}  

  handleGameState(){
    switch(this.state.gameState){
      case 0:
        return (<HomeScreen onClick = {this.changeGameState}></HomeScreen>);
      case 1:
        return (<GameScreen stopGame = {this.hasUserLost} data = {this.state.stockDataObj}></GameScreen>);
      case 2:
        return (<InstructionScreen></InstructionScreen>);
      case 3:
        return(<VisualScreen></VisualScreen>);
      case 4:
        return(<ResearchScreen></ResearchScreen>);
      case 5:
        return(<RestartScreen></RestartScreen>);
    }
  }


  render() {
      return (
        <Router>

      <div className = "appContainer"
        style={{
          // position: "absolute",
          // top: 0,
          // left: 0,
          width: "100vw",
          height: "100vh"
        }}
      >
      <div id = "particles-js">
        <Particles className = "particles"
                params={{
                    "particles": {
                        "line_linked": {
                                    "color":"#3AA5B0"
                                    },
                        "number": {
                            "value": 100
                        },
                        "size": {
                            "value": 10
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
                        height:'100vh',
                        background: `#96D0F1` 
                 }}
          />
            {this.inits()}
            {this.handleGameState()}
      </div>
      </div>
    </Router>

      );
  }
}