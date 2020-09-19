import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import GameScreen from './components/GameScreen.js';
import InstructionScreen from './components/InstructionScreen.js';
import HomeScreen from './components/HomeScreen.js';
import ResearchScreen from './components/ResearchScreen.js';
import RestartScreen from './components/RestartScreen.js';
import VisualScreen from './components/VisualScreen.js';
import "./index.css";

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
      return (
          <div className = "appContainer">
            {this.handleGameState()}
          </div>
      );
  }
}