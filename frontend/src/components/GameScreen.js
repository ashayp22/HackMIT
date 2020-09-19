import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/Button';
import Graph from './Graph.js';
import Metrics from './Metrics.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Stock from './Stock.js'
import TwitterEmojiGraph from './TwitterEmojiGraph.js';

export default class GameScreen extends React.Component{
    componentDidMount() {
        
    }
  
    componentWillUnmount() {

    }

    state = {
        score: 0
    }
    validateResponse = (userAnswer, correctAnswer) => {
        if(userAnswer == correctAnswer){
            // alert("Good Job");
            this.setState({score: this.state.score + 1});
        }
        else {
            // alert("You Lose");
            this.props.stopGame(this.state.score);
        }
    }
  render() {

    let buttonStyle = {
        zIndex: "100",
        width: "100",
        height: "100"
    }
    let divStyle = {
        width: "100%",
        height: (document.body.clientHeight) + "px",
        textAlign: 'center',
    }

    let centerStyle = {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%, -50%)',
      border: '5px solid #FFFF00',
      padding: '10px',
      backgroundColor: 'white'
    }
      return (
        <Router>
          <Stock data = {this.props.data}></Stock>
        <div style={centerStyle}>
            <Button onClick = {() => this.validateResponse("Buy", "Buy")} variant = "primary">Buy</Button>
            <Button onClick = {() => this.validateResponse("Buy", "Short")} variant = "secondary">Short</Button>
            <h3>Score: {this.state.score} </h3>
        </div>
        </Router>

      );
  }

}

