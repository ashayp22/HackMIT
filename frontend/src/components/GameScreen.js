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
      backgroundColor: 'white',
      boxShadow: "-4px 4px 2px gray",
    }
      return (
        <Router>
          <Stock game = {true} onClick = {this.props.onClick} stopGame = {this.props.stopGame} data = {this.props.data}></Stock>
        </Router>

      );
  }

}

