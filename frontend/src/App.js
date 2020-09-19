import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import GameScreen from './components/GameScreen.js';
import InstructionScreen from './components/InstructionScreen.js';
import MenuScreen from './components/MenuScreen.js';
import ResearchScreen from './components/ResearchScreen.js';
import RestartScreen from './components/RestartScreen.js';
import VisualScreen from './components/VisualScreen.js';


export default class App extends React.Component{
  render() {
      return (
          <div className="gameScreen">
              <div className = "title">
                  Stock App
              </div>
              <div className = "buttons">
                  <Button onClick = {() => this.handleClick()} variant="primary">Priry</Button>{' '}
                  <Button onClick = {() => this.handleClick()} variant="secondary">Secondary</Button>{' '}
              </div>
              <GameScreen></GameScreen> 
              <InstructionScreen></InstructionScreen> 
              <MenuScreen></MenuScreen> 
              <ResearchScreen></ResearchScreen> 
              <RestartScreen></RestartScreen> 
              <VisualScreen></VisualScreen> 
          </div>
      );
  }
}

